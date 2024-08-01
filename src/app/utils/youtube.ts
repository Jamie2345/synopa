export default async function getVideoInfo(videoURL: string) {
  // Function to extract video ID from YouTube URL
  function extractVideoId(videoUrl: string): string | null {
    const regex =
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/;
    const match = videoUrl.match(regex);
    return match ? match[1] : null; // Return the video ID or null if not found
  }

  const videoId = extractVideoId(videoURL);
  if (!videoId) {
    console.error('Invalid video ID')
    return false;
  }

  const apiKey = "AIzaSyCBIViTpW9BETrLqA3c_QIiAoMkFZ2Tzps"; // Ensure you set this in your environment variables
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
  console.log(url);
  console.log(apiKey);
  const response = await fetch(url);
  console.log(response);

  if (!response.ok) {
    console.error("Failed to fetch video details");
    return false;
  }

  const data = await response.json();

  // Check if the response contains items
  if (!data.items || data.items.length === 0) {
    console.error("No video found for the provided ID");
    return false;
  }

  const videoInfo = data.items[0].snippet; // Get snippet from the first item

  return {
    videoURL: videoURL,
    title: videoInfo.title, // Video title
    creator: videoInfo.channelTitle, // Creator/channel name
    thumbnail: videoInfo.thumbnails.high.url // Video thumbnail
  };
}