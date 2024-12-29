import React from 'react';
import Header from './components/HomePage/Header';
import Sidebar from './components/HomePage/Sidebar';
import VideoGrid from './components/HomePage/VideoGrid';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <VideoGrid />
      </div>
    </div>
  );
}

export default App;
