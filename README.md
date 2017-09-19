# power-control

Simple cross-platform Node.js module that provides power off and restart functionality.


## Features
* Lightweight
* No dependencies
* Cross-platform: **Linux**, **macOS**, **Windows** and **FreeBSD**


## Install

```
npm install --save power-control
```


## Usage
**Note:** Your application needs to be run with appropriate permissions for the commands to be successful.

```js
var powerControl = require('power-control');

// Power off system
powerControl.powerOff();

// Restart system
powerControl.restart();
```


## License
MIT
