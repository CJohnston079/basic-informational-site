const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const file = req.url.replace(/\//g, "") || "index";
	fs.readFile(`${file}.html`, (e, data) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
});

const PORT = 8080;

server.listen(PORT);
