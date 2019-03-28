'use strict';
const fetch = require('node-fetch');

class RawHue {

    constructor(){
    } 

    async init(ip,username) {
        this.baseurl = `http://${ip}/api/${username}/`;
    }

    async listGroups() {
        return await this.get(`groups`);
    }

    async listLights() {
        return await this.get(`lights`);
    }

    async listSensors() {
        return await this.get(`sensors`);
    }

    async get(path) {
        const res = await fetch(encodeURI(`${this.baseurl}${path}`), {
            method: "GET",
            headers: {
                'User-Agent' : 'raw-hue-api',
            },
            redirect: "manual",
        })
        .catch(error=>{
            return {success:false, error: error};
            //todo: log error
        });
        return await res.json();
    }
}

module.exports = new RawHue();
