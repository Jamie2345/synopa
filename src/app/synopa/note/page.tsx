"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function NotesPage() {
  const searchParams = useSearchParams();
  const noteId = searchParams.get("note"); // Get the note ID from the query string

  const [noteData, setNoteData] = useState<any>(null); // State to hold the note data
  const [error, setError] = useState<string | null>(null); // State to hold error message

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

  // Early return pattern for rendering

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
      <div className="w-full h-screen flex flex-col">
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
          <div>
            <h1 className="text-3xl font-semibold mb-4">New Note</h1>
            <h2>Video: {noteData.title}</h2>
            <p>Channel: {noteData.creator}</p>
            <p>
              URL:{" "}
              <a href={noteData.videoURL} target="__blank">
                {noteData.videoURL}
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}