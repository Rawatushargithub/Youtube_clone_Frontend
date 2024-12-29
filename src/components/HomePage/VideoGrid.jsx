import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";

function VideoGrid() {
  const [videos, setVideos] = useState([]);
  const rowHeight = 300; // Height of each row in the grid
  const columns = 3;     // Number of videos per row

  // Fetch videos on initial load
  useEffect(() => {
    const fetchAllVideos = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/videos/getAllVideo");
        const data = await response.json();
        setVideos(data.videos || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchAllVideos();
  }, []);

  // Render each row of the video grid (3 videos per row)
  const Row = ({ index, style }) => {
    const startIndex = index * columns;
    const rowItems = videos.slice(startIndex, startIndex + columns);

    return (
      <div style={style} className="flex space-x-4 bg-gray-800">
        {rowItems.map((video, idx) => (
          <div key={video._id || idx} className="bg-gray-800 text-white shadow-md rounded-lg p-2 w-1/3">
            <img
              src={video.thumbNail}
              alt={video.title}
              className="w-full h-48 rounded-md object-cover"
            />
            <div className="mt-2 flex items-start">
              <img
                src={video.avatarUrl}
                alt="Avatar"
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <h4 className="text-sm font-semibold">{video.title}</h4>
                <p className="text-xs text-gray-400">
                  {video.views} views • {video.duration}
                </p>
                <p className="text-xs text-gray-400 mt-1">{video.descripation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <List
      height={762} // Total height of the list container
      itemCount={Math.ceil(videos.length / columns)} // Total number of rows
      itemSize={rowHeight} // Height of each row
      width={1500} // Width of the entire grid container
    >
      {Row}
    </List>
  );
}

export default VideoGrid;
