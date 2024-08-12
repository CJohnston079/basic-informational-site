const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const file = req.url.replace(/\//g, "") || "index";

	fs.readFile(`${file}.html`, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-Type": "text/plain" });
			res.end("404 Not Found");
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
});

const PORT = 8080;

server.listen(PORT);
