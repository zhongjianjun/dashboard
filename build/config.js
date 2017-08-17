const { version } = require('./util.js')

function config() {
  const hostname = 'localhost'
  const port = 9999
  return {
    hostname,
    port,
    version,
    origin: 'http://' + hostname + ':' + port,
    domain: '',
    pages: [{
      key: 'app',
      name: 'app.html'
    }, {
      key: 'login',
      name: 'login.html'
    }]
  }
}

module.exports = config
