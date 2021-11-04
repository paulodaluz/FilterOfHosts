const fs = require("fs");
const path = require("path");
const glob = require("glob-all");

const dir = process.cwd();

let files = glob
    .sync([path.join(dir, "/filesOfFavorites/*")])
    .map((filepath) => ({ name: path.basename(filepath), path: filepath }));

let listOfHosts = "";

files.forEach((file) => {
    const hosts = fs.readFileSync(file.path);

    hosts
        .toString()
        .split("\n")
        .map((line) => {
            let host;
            const onlyNumbersDotsSlashes = line.replace(/[^0-9.:/]/gi, "");

            const ipSize = onlyNumbersDotsSlashes.split(" ")[0].slice(0, 19);

            const hasIP = /([0-9]{1,3}\.){3}[0-9]{1,3}/.test(ipSize);

            if (hasIP) {
                let iP = ipSize.replace(/^:\/\//gi, "");

                const hasPort = /([0-9]{1,3}\.){3}[0-9]{1,3}:/.test(iP);

                host = hasPort ? iP.substring(0, iP.indexOf(':')) : iP.substring(0, iP.indexOf('/'));
            }

            if (host && !listOfHosts.includes(host) && host.length > 7) {
                listOfHosts = listOfHosts.concat(`${host}\n`);
            }
        });
});

fs.writeFile("allIpsFromFavorites.txt", listOfHosts, function (err) {
    if (err) return console.log(err);
    console.log("Hosts > allIpsFromFavorites.txt");
});
