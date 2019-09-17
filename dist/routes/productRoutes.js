"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("../data/products"));

var productRoutes = _express["default"].Router(); //Retrieves all product


productRoutes.get('/', function (req, res) {
  res.json(_products["default"]);
}); //Retrieve a single product by Id

productRoutes.get('/:id', function (req, res) {
  var id = req.params.id;

  var product = _products["default"]["product".concat(id)];

  res.json(product);
}); //Add new product

productRoutes.post('/', function (req, res) {
  var newProduct = req.body;
  _products["default"]["product" + newProduct.id] = newProduct;
  res.json(newProduct);
});
var _default = productRoutes;
exports["default"] = _default;