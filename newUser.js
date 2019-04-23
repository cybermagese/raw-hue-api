const api = require('raw-hue-api');

let ip = "MY_HUE_BRIDGE_IP";
let myapp = "IORIVER#MY_HOME"; //max 40 characters
api.newUser(ip,myapp).then((d)=>{
    console.log(d);
});