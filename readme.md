# @dfeprado/log
## Log utilty based on chalk (https://github.com/chalk/chalk)

### Instalation
```
npm install @dfeprado/log
```

### Basic usage
```javascript
const log = require('@dfeprado/log');

log.info('Hello world!'); // info log, green message
log.notice('Hello world!'); // notice log, purple message
log.warning('Hello world!'); // warning log, yellow message
log.error('Hello world!'); // error log, red message
```

### Log level configuration
You can set log level with OR numeric values and Log.setLogLevel()
- 0x1: info level only
- 0x2: notice level only
- 0x4: warning level only
- 0x8: error level only

#### Examples:
```javascript
const log = require('@dfeprado/log');

log.setLogLevel(0x1 | 0x8); // Info and error only

log.setLogLevel(0x1 | 0x2 | 0x8); // Info, notice and error only (ignore warning messages)

log.setLogLevel(0xf); // all levels enabled (default)
```

### Typescript usage
Add the *esModuleInterop = true* configuration to your tsconfig.json file.

```typescript
import Log from '@dfeprado/log';

Log.info('Hello world!');
```

### Every new ideas or sugestions are wellcomed.