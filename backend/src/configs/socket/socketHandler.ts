import { Server, Socket } from "socket.io";

function setUpSocket(io: Server): void {
  io.on("connection", (socket: Socket) => {
    const userId = socket.handshake.query.userId as string;
    console.log(`User Connected: ${userId} (Socket ID: ${socket.id})`);

    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${userId} (Socket ID: ${socket.id})`);
    });
  });
}

export { setUpSocket };
