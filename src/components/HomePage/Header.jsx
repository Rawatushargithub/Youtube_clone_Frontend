import React, { useState } from 'react';
import Login from '../loginpage/login';
import Signup from '../loginpage/signup';  // Assuming you have a Signup component

function Header() {
  const [view, setView] = useState(''); // Track which form to display (login or signup)

  const onLoginClick = () => {
    console.log("Login button clicked");
    setView('login'); // Set view to 'login'
  };

  const onSignupClick = () => {
    console.log("Signup button clicked");
    setView('signup'); // Set view to 'signup'
  };

  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <div className="flex items-center space-x-4">
          <img
            src="https://th.bing.com/th/id/OIP.lKZ7xlLixGofkpSrUWXbPgHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="Play Logo"
            className="h-8 w-8"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-800 text-white p-2 rounded-md w-64 focus:outline-none"
          />
        </div>
        <div className="space-x-4">
          <button
            className="px-4 py-2 text-sm font-semibold text-white"
            onClick={onLoginClick}
          >
            Log in
          </button>
          <button
            className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-semibold"
            onClick={onSignupClick}
          >
            Sign up
          </button>
        </div>
      </header>

      {/* Conditionally render the Login or Signup component */}
      {view === 'login' && <Login />}
      {view === 'signup' && <Signup />}
    </div>
  );
}

export default Header;
