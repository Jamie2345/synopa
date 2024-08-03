import { auth } from "../../../../../auth";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/db";
import mongoose from "mongoose";
import Note from "@/models/note";

async function loadDB() {
  // Ensure that the MongoDB client is connected
  await clientPromise; // Ensure the client is connected

  if (mongoose.connection.readyState === 0) {
    const MONGODB_URI = process.env.MONGODB_URI as string;
    await mongoose.connect(MONGODB_URI);
  }
}

export const POST = auth(async function POST(req: any) {
  if (req.auth) {
    try {
      const body = await req.json();
      console.log("Incoming body:", body);

      const noteData = {
        userId: req.auth.user.id,
        noteTitle: "New Note",
        videoURL: body.videoURL,
        videoTitle: body.videoTitle,
        creator: body.creator,
        thumbnail: body.thumbnail,
      };
      console.log("Note data to be saved:", noteData);

      // Ensure that the MongoDB client is connected
      await loadDB();
      // Create a new note document
      const newNote = new Note(noteData);

      // Save the note document to the database
      const savedNote = await newNote.save();
      console.log("saved note to database:", savedNote);
      return NextResponse.json(
        {
          noteId: savedNote._id,
        },
        { status: 201 }
      ); // Respond with the saved note and a 201 status
    } catch (error) {
      let message = "Unknown error occurred.";
      if (error instanceof Error) {
        message = error.message; // Access message if it's an Error instance
      }

      return NextResponse.json(
        { message: "Error saving note", error: message },
        { status: 500 }
      );
    }
  }

  // Return an authentication error if the user is not authenticated
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});

export const GET = auth(async function GET(req: any) {
  if (req.auth) {
    const { searchParams } = new URL(req.url);
    const noteId = searchParams.get("note"); // Assuming you're passing it as a query param
    console.log(noteId);
    await loadDB();
    
    try {
      const note = await Note.findById(noteId);

      // lock notes to only user that made them
      /*
      if (note.userId === req.auth.user.id) {
        return NextResponse.json(note);
      }
      else {
        return NextResponse.json({ message: "Please login to the account this note belongs to" })
      }
      */
      console.log(note)
      return NextResponse.json(note, {status: 200});
    }
    catch (err) {
      console.log(err);
      return NextResponse.json({ message: "not working" }, {status: 404});
    }
    
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});

export const PUT = auth(async function PUT(req: any) {
  if (req.auth) {
    try {
      const body = await req.json();

      await loadDB();

      const updatedNote = await Note.findByIdAndUpdate(body._id, body, {new: true});

      return NextResponse.json(updatedNote, { status: 200 });
    }
    catch (error) {
      let message = "Unknown error occurred.";
      if (error instanceof Error) {
        message = error.message; // Access message if it's an Error instance
      }

      return NextResponse.json(
        { message: "Error updating note", error: message },
        { status: 500 }
      );
    }
  }
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 });
});
