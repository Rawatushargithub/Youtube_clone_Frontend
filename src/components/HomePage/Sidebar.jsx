import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-800 text-white flex flex-col justify-between h-full">
      <ul className="space-y-4">
        <li className="cursor-pointer hover:text-purple-600">Home</li>
        <li className="cursor-pointer hover:text-purple-600">Liked Videos</li>
        <li className="cursor-pointer hover:text-purple-600">History</li>
        <li className="cursor-pointer hover:text-purple-600">My content</li>
        <li className="cursor-pointer hover:text-purple-600">Collection</li>
        <li className="cursor-pointer hover:text-purple-600">Subscribers</li>
      </ul>
      <div className="space-y-2">
        <button className="w-full bg-gray-700 py-2 text-sm rounded-md hover:bg-gray-600">
          Support
        </button>
        <button className="w-full bg-gray-700 py-2 text-sm rounded-md hover:bg-gray-600">
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
