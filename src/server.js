import http from "http";
import express from "express"; // Express 모듈을 가져옵니다. 이는 Node.js에서 웹 서버를 구축하는 데 사용.
import WebSocket from "ws";


const app = express(); // Express 애플리케이션 인스턴스를 생성.

app.set("view engine", "pug"); // Express 애플리케이션의 뷰 엔진을 Pug로 설정. 이는 템플릿 파일을 렌더링하는 데 사용.
app.set("views", __dirname + "/views"); // 뷰 파일(Pug 템플릿)의 디렉토리 위치를 설정. 현재 디렉토리의 /views 폴더를 사용.

app.use("/public", express.static(__dirname + "/public")); // "/public" 경로를 통해 정적 파일(css, js 등)을 제공할 수 있도록 설정. 실제 파일은 __dirname + "/public" 디렉토리에.

app.get("/", (req, res) => res.render("home")); // 루트 경로("/")에 GET 요청이 들어오면 "home" 템플릿을 렌더링하여 응답. 여기서 "home"은 home.pug 파일을 의미.

app.get("/*", (req, res) => res.redirect("/"));// 모든 경로에 대한 GET 요청을 처리. 
                                                // 경로가 "/"로 시작하는 모든 URL 패턴을 포괄.
                                                // 이 요청이 발생할 때마다, 클라이언트를 "/" 경로로 리디렉션.

const handleListen = () => console.log('Listening on http://localhost:3000'); // 서버가 시작되면 호출될 콜백 함수. 콘솔에 서버가 실행 중인 URL을 출력.
const server = http.createServer(app);// Node.js의 http 모듈을 사용하여 새로운 HTTP 서버를 생성.
                                        // 여기서 'app'은 Express 애플리케이션 인스턴스.
                                        // Express 앱을 HTTP 서버의 요청 리스너로 전달하여 모든 HTTP 요청을 처리할 수 있게함 .

const wss = new WebSocket.Server({ server });// 기존의 HTTP 서버 'server'를 사용하여 WebSocket 서버를 생성.
                                            // WebSocket.Server는 'ws' 라이브러리에서 제공하는 생성자.
                                            // { server } 옵션을 사용하여 기존의 HTTP 서버와 WebSocket 서버를 함께 사용할 수 있게 설정.


wss.on("connection", (socket) => {
    console.log("Connected to Browser✅");
    socket.send("hello");
});


server.listen(3000, handleListen);