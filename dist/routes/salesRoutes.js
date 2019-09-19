"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _sales = _interopRequireDefault(require("../data/sales"));

var salesRoutes = _express["default"].Router(); //Retrieves all sales


salesRoutes.get('/', function (req, res) {
  res.json(_sales["default"]);
}); //Retrieve a single sale by Id

salesRoutes.get('/:id', function (req, res) {
  var id = parseInt(req.params.id);

  _sales["default"].map(function (sale) {
    if (sale.id === id) {
      res.json(sale);
    }
  });
}); //Add new sales

salesRoutes.post('/', function (req, res) {
  var newSale = req.body;
  var sales = [];
  sales.push(newSale);
  res.json(newSale);
});
var _default = salesRoutes;
exports["default"] = _default;