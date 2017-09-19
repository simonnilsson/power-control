var cp = require('child_process');

module.exports = {

  powerOff: function() {
    var cmd = '';
    switch(process.platform) {
      case 'linux':
      case 'darwin':
      case 'freebsd':
        cmd = 'shutdown -h now';
        break;
      case 'win32':
        cmd = 'shutdown -s -t 0';
        break;
      default:
        throw new Error('Unsupported operating system');
    }
    cp.exec(cmd);
  },

  restart: function() {
    var cmd = '';
    switch(process.platform) {
      case 'linux':
      case 'darwin':
      case 'freebsd':
        cmd = 'shutdown -r now';
        break;
      case 'win32':
        cmd = 'shutdown -r -t 0';
        break;
      default:
        throw new Error('Unsupported operating system');
    }
    cp.exec(cmd);
  }

};
