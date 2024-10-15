import React, {useState,useEffect} from "react";
import {useSocket} from "../providers/Socket"
import {useNavigate} from "react-router-dom"

const Homepage = () => {
  const {socket} = useSocket();
  
  const navigate = useNavigate();
  
  const [email, setEmail] = useState();
  const [roomId, setRoomId] = useState();

  const handleRoomJoined = ({roomId}) => {
    navigate(`/room/${roomId}`)
  }

  useEffect(()=>{
    socket.on("joined-room", handleRoomJoined)
  },[socket])

  const handleJoinRoom = () => {
    socket.emit('join-room', {emailId : email, roomId})
  }

  return (
    <div className="homepage-container">
      <div className="input-container">
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter your email" />
        <input value={roomId} onChange={(e)=>setRoomId(e.target.value)} type="text" placeholder="Enter room code" />
        <button onClick={handleJoinRoom}>Enter Room</button>
      </div>
    </div>
  );
};

export default Homepage;
