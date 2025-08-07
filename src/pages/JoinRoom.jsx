import { useState } from "react";
import { useNavigate } from "react-router";
import logo from "../assets/logo-transparent-png.png";

const JoinRoom = () => {
  const [roomid, setRoomid] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (roomid.trim()) {
      navigate(`/room/${roomid}`);
    }
  };
  return (
    <div className="page-container">
      <header className="header">
        <img src={logo} alt="V-CONFRESS Logo" className="logo" />
      </header>

      <div className="join-container">
        <h1>
          Welcome to <span className="highlight">V-CONFRESS</span>
        </h1>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomid}
          onChange={(e) => setRoomid(e.target.value)}
        />
        <button onClick={handleSubmit}>JOIN NOW</button>
      </div>
    </div>
  );
};

export default JoinRoom;
