'use strict'; Object.defineProperty(exports, '__esModule', { value: true }); function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } } var _express = require('express'); var _express2 = _interopRequireDefault(_express)
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors)

class App {
  constructor () {
    this.expressApp = _express2.default.call(void 0)
    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.expressApp.use(_express2.default.json())
    this.expressApp.use(_cors2.default.call(void 0))
  }

  routes () {
    this.expressApp.get('/', (req, res) => {
      res.send('welcome to express22')
    })
  }
}

exports.default = new App().expressApp
