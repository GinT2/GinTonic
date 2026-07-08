const fs = require('fs');
const path = 'C:\\Users\\Lenovo\\.kimi_openclaw\\workspace\\portfolio\\src\\components\\Projects.jsx';
let c = fs.readFileSync(path, 'utf8');

c = c.replace(/accent: '#22d3ee'/g, "accent: '#00ff88'");
c = c.replace(/accent: '#a78bfa'/g, "accent: '#00ff88'");
c = c.replace(/accent: '#fbbf24'/g, "accent: '#00ff88'");
c = c.replace(/accent: '#818cf8'/g, "accent: '#00ff88'");

fs.writeFileSync(path, c);
console.log('Done');
