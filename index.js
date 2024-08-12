const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	const fileName = req.url.replace(/\//g, "") || "index";
	const filePath = `./${fileName}.html`;

	fs.readFile(filePath, (err, data) => {
		if (err) {
			fs.readFile("./404.html", (err, data) => {
				if (err) {
					res.writeHead(404, { "Content-Type": "text/plain" });
					res.end("404 Not Found");
				} else {
					res.writeHead(404, { "Content-Type": "text/html" });
					res.end(data);
				}
			});
		} else {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		}
	});
});

const PORT = 8080;

server.listen(PORT);
