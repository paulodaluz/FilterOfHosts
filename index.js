const fs = require('fs');
const path = require('path');
const glob = require('glob-all');

const dir = process.cwd();

let files = glob.sync([
  path.join(dir, '/filesOfHosts/*'),
]).map(filepath => ({ name: path.basename(filepath), path: filepath }));

let listOfHosts = '';

files.forEach(file => {
  const hosts = fs.readFileSync(file.path);

  hosts.toString().split('\n').map((line) => {
    const host = line.slice(0, 16).replace(/[^.0-9]+/ig, "").split('..')[0];
    
    if(host && !listOfHosts.includes(host) && host.length > 7) {
      listOfHosts = listOfHosts.concat(`${host}\n`)
      console.log(host);
    }
  });
});

fs.writeFile('allHosts.txt', listOfHosts, function (err) {
  if (err) return console.log(err);
  console.log('Hosts > allHosts.txt');
});