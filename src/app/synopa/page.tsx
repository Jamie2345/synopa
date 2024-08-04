"use client";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation"; // Import redirect function
import { SynopaNavbar } from "@/components/SynopaNavbar";
import { useSession } from "next-auth/react";
import getVideoInfo from "../utils/youtube";
import Loading from "@/components/Loading";

export default function Page() {
  const { data: session, status } = useSession();
  const [videoUrl, setVideoUrl] = useState("");

  const handleVideoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Assuming getVideoInfo is defined and fetches video information correctly
      const videoInfo = await getVideoInfo(videoUrl);

      // Sending a POST request with videoInfo
      const response = await fetch("http://localhost:3000/api/synopa/note", {
        method: "POST", // Specify that this is a POST request
        headers: {
          "Content-Type": "application/json", // Set content type for JSON
        },
        body: JSON.stringify(videoInfo), // Convert your videoInfo to JSON
      });

      // Handle the response
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Assuming the API sends back JSON
  
      if (data.noteId !== undefined) {
        window.location.href=`/synopa/note?note=${data.noteId}`;
      }
    } catch (error) {
      console.error("Error submitting video info:", error);
    }
  };

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "loading") return; // Wait for the session to load
    if (!session) {
      redirect("/login"); // Change this to your login route
    }
  }, [session, status]);

  // Optionally, you can handle a loading state if necessary
  if (status === "loading") {
    return (<Loading />);
  }

  return (
    <main className="h-screen" data-theme="bumblebee">
      <SynopaNavbar />
      <div className="p-24 w-full max-w-[1350px] m-auto">
        <div className="flex justify-between w-full p-4">
          <h1 className="text-2xl font-semibold">My Notes</h1>
          <form
            className="flex justify-center items-center"
            onSubmit={handleVideoSubmit}
          >
            <input
              type="text"
              className="shadow-lg rounded-md p-2 outline-secondary-content border-[1px] border-gray-800 text-sm outline-1 h-8 mr-2"
              name="video"
              placeholder="Enter YouTube Video URL"
              onChange={(e) => setVideoUrl(e.target.value)}
              required
            />
            <button
              type="submit"
              className="btn btn-secondary font-semibold btn-sm text-xs text-white h-8"
            >
              New Note
            </button>
          </form>
        </div>
        <div className="w-full"></div>
      </div>
    </main>
  );
}
