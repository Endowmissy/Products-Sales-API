"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _sales = _interopRequireDefault(require("../data/sales"));

var salesRoutes = _express["default"].Router(); //Retrieves all sales


salesRoutes.get('/', function (req, res) {
  res.json(_sales["default"]);
}); //Retrieve a single sale by Id

salesRoutes.get('/:id', function (req, res) {
  var id = req.params.id;

  var sale = _sales["default"]["sale".concat(id)];

  res.json(sale);
}); //Add new sales

salesRoutes.post('/', function (req, res) {
  var newSale = req.body;
  _sales["default"]["sale" + newSale.id] = newSale;
  res.json(newSale);
});
var _default = salesRoutes;
exports["default"] = _default;