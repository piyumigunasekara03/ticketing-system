import { io } from "socket.io-client";

// Connect to the backend WebSocket server
const socket = io("http://localhost:4000"); // Replace with your backend URL

export default socket;
