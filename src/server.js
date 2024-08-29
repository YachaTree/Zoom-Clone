import express from "express"; // Express 모듈을 가져옵니다. 이는 Node.js에서 웹 서버를 구축하는 데 사용.

const app = express(); // Express 애플리케이션 인스턴스를 생성.

app.set("view engine", "pug"); // Express 애플리케이션의 뷰 엔진을 Pug로 설정. 이는 템플릿 파일을 렌더링하는 데 사용.
app.set("views", __dirname + "/views"); // 뷰 파일(Pug 템플릿)의 디렉토리 위치를 설정. 현재 디렉토리의 /views 폴더를 사용.

app.use("/public", express.static(__dirname + "/public")); // "/public" 경로를 통해 정적 파일(css, js 등)을 제공할 수 있도록 설정. 실제 파일은 __dirname + "/public" 디렉토리에.

app.get("/", (req, res) => res.render("home")); // 루트 경로("/")에 GET 요청이 들어오면 "home" 템플릿을 렌더링하여 응답. 여기서 "home"은 home.pug 파일을 의미.

const handleListen = () => console.log('Listening on http://localhost:3000'); // 서버가 시작되면 호출될 콜백 함수입니다. 콘솔에 서버가 실행 중인 URL을 출력.

app.listen(3000, handleListen); // 서버를 3000번 포트에서 실행하고, 실행이 완료되면 handleListen 함수를 호출.