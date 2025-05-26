import { Server } from "socket.io";
import http from "http";

let io: Server;

export function setupSocket(server: http.Server) {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });

    // Add other socket event handlers here
  });
}

export { io };
