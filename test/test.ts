import { LogLevel, Log } from '../src/index';

let log: Log = new Log(LogLevel.all);

log.info('Hello world!');

log.error('Ohh!');

log.close();