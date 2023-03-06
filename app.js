// 기본 설정
const http = require("http"),
      express = require("express"),
      app = express();

// 정적 파일 불러오기
app.use(express.static('public'));
app.use(express.static('common'));


// 라우팅 정의
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

// 서버 실행
http.createServer(app).listen(3000, function () {
  console.log("web server start.");
});