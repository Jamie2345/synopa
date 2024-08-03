"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { FaArrowLeftLong } from "react-icons/fa6";

import ReactQuill from "react-quill"; // Import the editor
import "react-quill/dist/quill.snow.css"; // Import the CSS for the editor
import "@/css/notes.css"; // Import the CSS for the notes

export default function NotesPage() {
  const searchParams = useSearchParams();
  const noteId = searchParams.get("note"); // Get the note ID from the query string

  const [noteData, setNoteData] = useState<any>(null); // State to hold the note data
  const [error, setError] = useState<string | null>(null); // State to hold error message
  const [editingNoteTitle, setEditingNoteTitle] = useState(false); // State to hold

  const handleNoteChange = (value: any) => {
    console.log(noteData);
    setNoteData({
      ...noteData,
      notes: value,
    });
  };

  const updateNoteTitle = (newTitle: string) => {
    setNoteData((noteData: any) => ({
      ...noteData,
      noteTitle: newTitle,
    }));
  };

  // make api request to store the notes data into the db
  const updateNotesData = async () => {
    const response = await fetch("http://localhost:3000/api/synopa/note", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // Set content type for JSON
      },
      body: JSON.stringify(noteData),
    });
    console.log(noteData);
    const data = await response.json();
    console.log(data);
    if (response.status !== 200) {
      alert(
        "Error updating notes please check internet connection and try again"
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (noteId) {
        // Check if noteId is valid
        try {
          const response = await fetch(
            `http://localhost:3000/api/synopa/note?note=${noteId}`
          );

          if (response.status === 404) {
            throw new Error("Note not found");
          }

          if (!response.ok) {
            throw new Error("Network response was not okay");
          }

          const data = await response.json();
          setNoteData(data); // Set the fetched data in state
          setError(null); // Reset error if the fetch is successful
        } catch (err) {
          console.error("Fetch error:", err);
          // Check if err is an instance of Error
          if (err instanceof Error) {
            setError(err.message); // Set the error message in state
          } else {
            setError("An unknown error occurred"); // Fallback error message
          }
        }
      }
    };

    fetchData(); // Invoke the fetch function
  }, [noteId]); // Dependency array ensures it only runs when noteId changes

  // I have split it up so its easier to understand it would have been better to do the ? : stuff probably
  if (error) {
    return (
      <main className="min-h-screen" data-theme="bumblebee">
        <div className="flex items-center justify-center w-full h-screen bg-white">
          <div className="flex flex-col w-full max-w-80 mb-16 text-center">
            <a href="/" className="m-auto my-2 text-sm text-secondary-content">
              Synopa.
            </a>
            <div className="my-8">
              <h2 className="text-2xl mb-2">404 Error</h2>
              <p className="text-gray-700 text-sm mb-2">
                This note could not be found.
              </p>
            </div>
            <a
              className="btn btn-secondary w-full btn-sm text-sm font-light text-white"
              href="/synopa"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </main>
    );
  }

  if (!noteData) return <Loading />;

  // If everything is fine and noteData is available
  return (
    <main className="min-h-screen" data-theme="bumblebee">
      <div className="w-full min-h-screen flex flex-col">
        <div className="px-12 py-4 flex items-center justify-between">
          <a
            className="btn btn-sm"
            href="/synopa"
          >
          <FaArrowLeftLong /> Back
          </a>

          <button className="btn btn-secondary text-white btn-sm" onClick={async () => await updateNotesData()}>
            Save Changes
          </button>
        </div>
        <div className="px-12 py-8 flex items-center justify-start border-b-[1px] border-secondary-content">
          <div className="mr-10">
            <a href={noteData.videoURL} target="__blank">
              <img
                src={noteData.thumbnail}
                alt="video thumbnail"
                className="w-52 h-auto rounded-lg shadow-lg"
              />
            </a>
          </div>
          <div className="w-full">
            {editingNoteTitle ? (
              <div className="flex items-center mb-4">
                <input
                  className="outline-none text-3xl font-semibold w-full"
                  type="text"
                  value={noteData.noteTitle}
                  onChange={(e) => updateNoteTitle(e.target.value)}
                  autoFocus={true}
                  onBlur={async () => {
                    await updateNotesData();
                    setEditingNoteTitle(false);
                  }}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                      await updateNotesData();
                      setEditingNoteTitle(false);
                    }
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center mb-4">
                <h1 className="text-3xl font-semibold">{noteData.noteTitle}</h1>
                <button className="mt-2 ml-3 shadow-sm">
                  <PencilSquareIcon
                    className="h-5 w-5"
                    onClick={() => setEditingNoteTitle(true)}
                  />
                </button>
              </div>
            )}

            <h2>Video: {noteData.videoTitle}</h2>
            <p>Channel: {noteData.creator}</p>
            <p>
              URL:{" "}
              <a
                className="text-secondary-content"
                href={noteData.videoURL}
                target="__blank"
              >
                {noteData.videoURL}
              </a>
            </p>
          </div>
        </div>
        <div className="flex w-full h-screen">
          <div className="w-[50%]"></div>
          <div className="w-[50%] border-l-[1px] border-secondary pb-12">
            <ReactQuill
              value={noteData.notes}
              onChange={handleNoteChange}
              className="h-full border-b-0"
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }], // Header options
                  ["bold", "italic", "underline"], // Formatting options
                  ["link", "image"], // Link and image options
                  [{ list: "ordered" }, { list: "bullet" }], // List options
                  ["clean"], // Clear formatting button
                ],
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
