import * as dotenv from "dotenv";
import http from "http";
import { app } from "./app";
import { setupSocket } from "./configs/socket/socketSetup";

dotenv.config();

const PORT = process.env.PORT || 4000;
const server = http.createServer(app);

setupSocket(server);

server.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
