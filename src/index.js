"use strict";
exports.__esModule = true;
exports.Log = exports.LogLevel = void 0;
// Define o objeto de log
// Utiliza o módulo Chalk para fazer log com cores e implementa nível de log
var ch = require("chalk");
var fs_1 = require("fs");
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["info"] = 1] = "info";
    LogLevel[LogLevel["notice"] = 2] = "notice";
    LogLevel[LogLevel["warning"] = 4] = "warning";
    LogLevel[LogLevel["error"] = 8] = "error";
    LogLevel[LogLevel["all"] = 15] = "all";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var Log = /** @class */ (function () {
    function Log(logLevel, logFile) {
        if (logLevel === void 0) { logLevel = LogLevel.all; }
        if (logFile === void 0) { logFile = ''; }
        this.logLevel = logLevel;
        this.logFile = null;
        if (logFile)
            this.logFile = fs_1.createWriteStream(logFile, { flags: 'a' });
    }
    Log.prototype.doLog = function (consoleMsg, logMsg) {
        console.log(consoleMsg);
        if (this.logFile) {
            var d = new Date();
            this.logFile.write("[" + d.toLocaleString() + " " + logMsg + "\n");
        }
    };
    Log.prototype.close = function () {
        if (this.logFile)
            this.logFile.close();
        this.logLevel = 0;
    };
    Log.prototype.info = function (msg) {
        if (!(this.logLevel & 0x1))
            return;
        this.doLog(ch.green(msg), " INFO] " + msg);
    };
    Log.prototype.notice = function (msg) {
        if (!(this.logLevel & 0x2))
            return;
        this.doLog(ch.magenta(msg), " NOTICE] " + msg);
    };
    Log.prototype.warning = function (msg) {
        if (!(this.logLevel & 0x4))
            return;
        this.doLog(ch.yellow(msg), " WARNING] " + msg);
    };
    Log.prototype.error = function (msg) {
        if (!(this.logLevel & 0x8))
            return;
        this.doLog(ch.red(msg), " ERROR] " + msg);
    };
    return Log;
}());
exports.Log = Log;
