'use strict'

const https = require('https');
const host = 'discord.com';
const apiPath = process.env.APIPATH;
const hostname = process.env.HOSTNAME;
const clientname = "notify.js [" + hostname + "]";

const options = {
    hostname: host,
    port: 443,
    path: apiPath,
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    }
}

for(var i=2; i < process.argv.length; i++) {
    const post = {
        "username" : clientname,
        "content" : process.argv[i]
    };
    const req = https.request(options, (res)=>{
        console.log('STATUS: ' + res.statusCode)
        res.on('data', (d) => {
            process.stdout.write(d);
        });
    });
    req.on('error', (e) => {
        console.error(e);
    });
    req.write(JSON.stringify(post));
    req.end();
}
