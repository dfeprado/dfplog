"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
var log = new index_1.Log(index_1.LogLevel.all);
log.info('Hello world!');
log.error('Ohh!');
log.close();
