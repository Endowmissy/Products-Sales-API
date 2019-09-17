"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes.js"));

var _salesRoutes = _interopRequireDefault(require("./routes/salesRoutes.js"));

var _auth = _interopRequireDefault(require("./middleware/auth"));

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/products', _auth["default"], _productRoutes["default"]);
app.use('/sales', _auth["default"], _salesRoutes["default"]);
var port = process.env.PORT || 5000;
var server = app.listen(3000, function () {
  console.log('Listening on port 3000');
});