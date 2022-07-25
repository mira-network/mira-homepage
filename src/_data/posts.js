const fetch = require("node-fetch"); // kräver node-fetch v2, inte v3. Se https://stackoverflow.com/questions/61670459/importing-in-node-js-error-must-use-import-to-load-es-module
// import fetch from 'node-fetch';

module.exports = async function() {
    console.log("Fetching data...");
    console.log("process.env.WORDPRESS_REST_API_URL:" + process.env.WORDPRESS_REST_API_URL);

    return fetch(process.env.WORDPRESS_REST_API_URL)
        .then((res) => res.json())
        .then((json) => json);
    //.then((json) => console.log(json)); // För testutskrift av fetch
};