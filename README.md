# webpack boiler plate

## 사용 방법
1. 터미널에 npm run build를 입력하면 src폴더에 있는 파일들을 번들링하여 dist폴더에 생성
2. 터미널에 npm start를 입력하면 ./bin/www 파일이 실행
3. ./bin/www 파일이 ./app.js 를 실행
4. ./app.js 파일이 ./dist/index.html 파일을 브라우저에 표시함
5. port 번호 : var port = normalizePort(process.env.PORT || '3000'); (./bin/www :15)

## 기능
1. babel연동 (target : ie11로 설정되어있음)
2. ./src/javascripts 프론트 MVC패턴 적용
3. webpack html / scss / js 파일 번들링
 -> html / scss 내에 있는 이미지 파일들은 해쉬값으로 이름이 정해져서 dist 폴더에 저장
 -> webpack에서 MiniCssExtractorPlugin, HTMLWebpackPlugin 등 사용 가능 (package.json 파일 확인)