const http = require('http');
const os=require('os')
  
  const totalMemory=os.totalmem()
  const freeMemory=os.freemem()
  const osType=os.type()
  const osPlatform=os.platform()
  const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  const html = `
    <h1>System Information</h1>
    <p>Total Memory: ${totalMemory}</p>
    <p>Free Memory: ${freeMemory}</p>
    <p>OS Type: ${osType}</p>
    <p>OS Platform: ${osPlatform}</p>
    <p>File Path Info: ${JSON.stringify(path.parse(__filename))}</p>
  `;
  res.end(html);

  console.log(`Total Memory: ${totalMemory}`);
  console.log(`Free Memory: ${freeMemory}`);
  console.log(`OS Type: ${osType}`);
  console.log(`OS Platform: ${osPlatform}`);
  console.log(path.parse(__filename));
  console.log("Completed task");
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
