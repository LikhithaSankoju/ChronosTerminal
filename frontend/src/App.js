import React, { useState, useEffect } from "react";
import "./styles.css";
import Login from "./components/Login";
import Game from "./components/Game";

// Helper function to format Indian Standard Time (IST)
function formatIndianTime(date) {
  const istTime = new Date(date.getTime() + (5.5 * 60 * 60 * 1000)); // UTC + 5:30
  const hours = istTime.getUTCHours().toString().padStart(2, "0");
  const minutes = istTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = istTime.getUTCSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds} IST`;
}

// Function to get the initial authentication state synchronously
const getInitialAuthState = () => {
  const loggedInUser = localStorage.getItem('tt_logged_in');
  return {
    isAuthenticated: !!loggedInUser,
    currentUser: loggedInUser,
  };
};

function App() {
  // State for authentication
  const [authState, setAuthState] = useState(getInitialAuthState);
  
  // State for the Indian Standard Time, passed down to the Game component
  const [indianTime, setIndianTime] = useState(formatIndianTime(new Date()));

  // Effect to update the Indian time every second
  useEffect(() => {
    const timerId = setInterval(() => setIndianTime(formatIndianTime(new Date())), 1000);
    return () => clearInterval(timerId);
  }, []);

  // Handle login action
  const handleLogin = (username) => {
    // The 'tt_logged_in' item is set by the Login component itself
    setAuthState({ isAuthenticated: true, currentUser: username });
  };

  // Handle logout action
  const handleLogout = () => {
    localStorage.removeItem('tt_logged_in');
    // We also remove the game state to ensure a clean slate for the next user
    localStorage.removeItem("timeTravelGameStateV1"); 
    setAuthState({ isAuthenticated: false, currentUser: null });
  };

  return (
    <div className="App">
      {authState.isAuthenticated ? (
        <Game 
          currentUser={authState.currentUser} 
          onLogout={handleLogout}
          systemTime={indianTime}
        />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;