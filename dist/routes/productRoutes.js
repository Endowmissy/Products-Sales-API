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
  var id = parseInt(req.params.id);

  _products["default"].map(function (product) {
    if (product.id === id) {
      res.json(product);
    }
  });
}); //Add new product

productRoutes.post('/', function (req, res) {
  var newProduct = req.body;
  var products = [];
  products.push(newProduct);
  res.json(newProduct);
});
var _default = productRoutes;
exports["default"] = _default;