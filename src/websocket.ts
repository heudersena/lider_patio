import { io } from "./http";

io.on("connection", (socket) => {
  console.log("user connected: ", socket.id);
  socket.on("disconnect", () => console.log("user desconect socketIo"));
});
