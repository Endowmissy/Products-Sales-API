"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = _interopRequireDefault(require("../data/users"));

var auth = function auth(req, res, next) {
  if (_users["default"].some(function (a) {
    return a.email === req.body.email;
  })) {
    next();
  } else {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm=Authorization Required');
    return res.end('Unauthorized');
  }
};

var _default = auth;
exports["default"] = _default;