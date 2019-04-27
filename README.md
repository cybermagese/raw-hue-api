# raw-hue-api

A simple REST implementation of Philips Hue Bridge API with raw json results

## Setup

```bash
sudo npm install raw-hue-api
```

For global setup:

```bash
sudo npm -g i raw-hue-api
```

## Usage

In order to use this api, you will need to know the IP address of the Hue Bridge and have or create a local username

```node
const api = require('raw-hue-api');
api.init('IP_OF_HUE_BRIDGE', 'USERNAME');

api.listSensors()
.then((d)=>{
 console.log(d);
})
.catch((e)=>{
 console.log(e);
});

```

## Creating username

The link button on the bridge must have been recently pressed for the command to execute successfully. If the link button has not been pressed a 101 error will be returned. See newUser.js

```javascript
const api = require('raw-hue-api');

let ip = "MY_HUE_BRIDGE_IP";
let myapp = "IORIVER#MY_HOME_NAME"; //max 40 characters
api.newUser(ip,myapp).then((d)=>{
    console.log(d);
});

```

### sample response

```json
[{"success":{"username": "83b7780291a6ceffbe0bd049104df"}}]
```

## Methods

### listGroups()

### listSensors()

### listLights()

## Version history

### 0.1.1

* Fixed newUser so it works

### 0.1.0

* method put, post, setLight, getConfig()
* method newUser(ip,devicetype)

### 0.0.1

* methods ListLights, ListSensors, ListGroups