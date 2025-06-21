//  Node.js OS Module


const os = require('os');

// Basic OS Information
console.log("Operating System Type      :", os.type());            // e.g., Linux, Windows_NT
console.log("Platform                  :", os.platform());         // e.g., win32, linux, darwin
console.log("CPU Architecture          :", os.arch());             // e.g., x64, arm

// CPU Info
const cpus = os.cpus();
console.log("Number of CPU Cores       :", cpus.length);
console.log("CPU Model (1st Core)      :", cpus[0].model);

// System Uptime (in hours)
const uptimeHours = (os.uptime() / 3600).toFixed(2);
console.log("System Uptime             :", uptimeHours, "hours");

// Memory Info (in MB)
console.log("Free Memory               :", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("Total Memory              :", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");

// System Details
console.log("System Endianness         :", os.endianness());       // LE or BE
console.log("Home Directory            :", os.homedir());
console.log("Current User              :", os.userInfo().username);
console.log("Host Name                 :", os.hostname());

// Network Interfaces
console.log("Network Interfaces:");
const nets = os.networkInterfaces();

for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    const type = net.family;
    const address = net.address;
    const mac = net.mac;
    const internal = net.internal ? '[Internal]' : '';
    console.log(` - ${name} (${type}): ${address} ${mac} ${internal}`);
  }
}
