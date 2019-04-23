'use strict';
const fetch = require('node-fetch');

class RawHue {

    constructor(){
    } 

    async init(ip,username) {
        this.baseurl = `http://${ip}/api/${username}/`;
    }

    async getConfig() {
        return await this.get(`config`);
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

    async setLight(id, action={}) {
        return await this.put(`lights/${id}/state`, action);
    }

    async newUser(ip, devicetype='raw-hue-api#unknown', timeout=1500) {
        const res = await fetch(encodeURI(`hppt:((${ip}/api`), {
            method: "PUT",
            headers: {
                'User-Agent' : 'raw-hue-api',
                'Content-Type': 'application/json'
            },
            redirect: "manual",
            body: JSON.stringify({devicetype:devicetype}),
            timeout: timeout
        })
        .catch(error=>{
            return {success:false, error: error};
        });
        return await res.json();
    }
    

    async get(path,timeout=1500) {
        const res = await fetch(encodeURI(`${this.baseurl}${path}`), {
            method: "GET",
            headers: {
                'User-Agent' : 'raw-hue-api',
            },
            redirect: "manual",
            timeout: timeout
        })
        .catch(error=>{
            return {success:false, error: error};
            //todo: log error
        });
        return await res.json();
    }

    async put(path, data, timeout=1500) {
        const res = await fetch(encodeURI(`${this.baseurl}${path}`), {
            method: "PUT",
            headers: {
                'User-Agent' : 'raw-hue-api',
                'Content-Type': 'application/json'
            },
            redirect: "manual",
            body: JSON.stringify(data),
            timeout: timeout
        })
        .catch(error=>{
            return {success:false, error: error};
            //todo: log error
        });
        return await res.json();
    }

    async post(path, data, timeout=1500) {
        const res = await fetch(encodeURI(`${this.baseurl}${path}`), {
            method: "POST",
            headers: {
                'User-Agent' : 'raw-hue-api',
                'Content-Type': 'application/json'
            },
            redirect: "manual",
            body: JSON.stringify(data),
            timeout: timeout
        })
        .catch(error=>{
            return {success:false, error: error};
            //todo: log error
        });
        return await res.json();
    }
}

module.exports = new RawHue();
