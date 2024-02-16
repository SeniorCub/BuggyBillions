const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Read the HTML file
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Handle error (e.g., file not found)
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      // Send the HTML content as the response
      res.writeHead(200);
      res.end(data);
    }
  });
});

// Set the port number (e.g., 3000)
const port = 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});


// https://blackbox.ai/share/e5ad8105-5529-439a-b774-c52cb1b449c9