const Log = require('../index');

// all log level enabled
Log.setLogLevel(0xf);

Log.info('Hello world!');
Log.notice('Hello world!');
Log.warning('Hello world!');
Log.error('Hello world!');