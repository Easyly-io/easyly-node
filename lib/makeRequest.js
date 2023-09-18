const fetch = require("node-fetch");
const EasylyError = require("../cjs/EasylyError").EasylyError;

// const BASE_PATH = (process.env.ENVIRONMENT == 'development' || process.env.ENVIRONMENT == 'local') ? 'http://localhost:3001/v1' : 'https://api.easyly.com/v1';
const BASE_PATH = "https://api.easyly.com/v1";

function makeRequest(key,opts) {

    return fetch(BASE_PATH+''+opts.path, {
        method: opts.method,
        headers:{
            'Authorization': 'Bearer '+key,
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(opts?.body),
    }).then(async(resp)=>{
        if(resp.status >= 200 && resp.status < 300){
            return await resp.json();
        }

        throw new EasylyError(resp,resp.text())
    });
}

module.exports = makeRequest;