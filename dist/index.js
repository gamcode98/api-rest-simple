"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

require("./database");

_app["default"].listen(_app["default"].get("port"), function (req, res) {
  console.log("Server on PORT: ", _app["default"].get("port"));
});