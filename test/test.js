const {LogLevel, Log} = require('../build/index');

let log = new Log(LogLevel.all, './test/logfile');

log.setStdoutOff();

log.info('Hello world!');
log.notice('Oh my God!');

log.close();