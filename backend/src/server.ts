import * as dotenv from "dotenv";
import { app } from "./app";

// Load environment variables from the .env file
dotenv.config();

const server = require("http").createServer(app);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
