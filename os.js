const os = require('os');

// arch()
console.log(os.arch());

// platform()
console.log(os.platform());

// cpus()
console.log(os.cpus());

// freemem()
console.log(os.freemem() / 1024 / 1024 / 1024);

// totalmem()
console.log(os.totalmem() / 1024 / 1024 / 1024);

// homedir()
console.log(os.homedir());

// uptime()
console.log(os.uptime() / 60 / 60 / 24);
