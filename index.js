"use strict";
// Define o objeto de log
// Utiliza o módulo Chalk para fazer log com cores e implementa nível de log
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var chalk_1 = __importDefault(require("chalk"));
var ch = chalk_1["default"];
module.exports = {
    _logLevel: 0xf,
    _doLog: function (msg) {
        console.log(msg);
    },
    setLogLevel: function (newLevel) {
        this._logLevel = newLevel;
    },
    info: function (msg) {
        if (!(this._logLevel & 0x1))
            return;
        this._doLog(ch.green(msg));
    },
    notice: function (msg) {
        if (!(this._logLevel & 0x2))
            return;
        this._doLog(ch.magenta(msg));
    },
    warning: function (msg) {
        if (!(this._logLevel & 0x4))
            return;
        this._doLog(ch.yellow(msg));
    },
    error: function (msg) {
        if (!(this._logLevel & 0x8))
            return;
        this._doLog(ch.red(msg));
    }
};
