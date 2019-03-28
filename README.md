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

In order to use this api, you will need to know the IP address of the Hue Bridge and have or create a local username (I used huejay)

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

## Methods

### listGroups()

### listSensors()

### listLights()

## Version history

0.0.1 methods ListLights, ListSensors, ListGroups