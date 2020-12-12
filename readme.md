# @dfeprado/log
## Log utilty based on chalk (https://github.com/chalk/chalk)

### Instalation
```
npm install @dfeprado/log
```

### Basic usage
```javascript
const { LogLevel, Log } = require('@dfeprado/log');

const log = new Log(LogLevel.all);

log.info('Hello world!'); // info log, green message
log.notice('Hello world!'); // notice log, purple message
log.warning('Hello world!'); // warning log, yellow message
log.error('Hello world!'); // error log, red message
```

### Log levels
- info
- notice
- warning
- error
- all

#### Examples:
**Without file logging**

```javascript
const { LogLevel, Log } = require('@dfeprado/log');

let log = new Log(LogLevel.info | LogLevel.error); // Info and error only

log.info('Hello world!'); // print to stdout
log.error('Ohh!'); // print to stdout
log.warning('Warning!!!'); // do not print to stdout

log.close(); // gracefully closes log
```

**With file logging**
```javascript
const { LogLevel, Log } = require('@dfeprado/log');

let log = new Log(LogLevel.all, '/var/log/log_sample');

log.error('Ohh!'); // write log to stdout and to /var/log/log_sample

log.close(); // gracefully closes log
```

**Disabling stdout**
```javascript
const {LogLevel, Log} = require('@dfeprado/log');

let log = new Log(LogLevel.all, '/var/log/log_sample');
log.setStdoutOff();
log.Error('Hey! I cannot show myself in stdout!');

log.close();
```

## Typescript usage
```typescript
import { LogLevel, Log} from '@dfeprado/log';

let log: Log = new Log(LogLevel.all);

log.info('Hello world!');
log.close(); // gracefully closes log.
```

### Every new ideas or sugestions are wellcomed.