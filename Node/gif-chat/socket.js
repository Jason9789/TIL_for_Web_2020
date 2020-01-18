// const WebSocket = require("ws");
const SocketIO = require("socket.io");

module.exports = server => {
  // ws 사용

  //   const wss = new WebSocket.Server({ server });
  //   wss.on("connection", (ws, req) => {
  //     // 클라이언트의 ip를 알아내는 유명한 방법 중 하나.
  //     const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  //     console.log("새로운 클라이언트 접속", ip);

  //     ws.on("message", message => {
  //       console.log(message);
  //     });
  //     ws.on("error", error => {
  //       console.error(error);
  //     });

  //     ws.on("close", () => {
  //       console.log("클라이언트 접속 해제", ip);
  //       clearInterval(ws.interval);
  //     });

  //     const interval = setInterval(() => {
  //       if (ws.readyState === ws.OPEN) {
  //         ws.send("서버에서 클라이언트로 메시지를 보냅니다.");
  //       }
  //     }, 3000);
  //     ws.interval = interval;
  //   });

  // Socket.io 사용
  const io = SocketIO(server, { path: "/socket.io" });

  io.on("connection", socket => {
    const req = socket.request;
    const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log("새로운 클라이언트 접속! ", ip, socket.id, req, ip);

    socket.on("disconnect", () => {
      console.log("클라이언트 접속 해제", ip, socket.id);
      clearInterval(socket.interval);
    });

    socket.on(
      "reply",
      data => {
        socket.emit("news", "Hello Socket.IO");
      },
      3000
    );
  });
};