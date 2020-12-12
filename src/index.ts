// Define o objeto de log
// Utiliza o módulo Chalk para fazer log com cores e implementa nível de log
const ch = require('chalk');
import { WriteStream, createWriteStream } from 'fs';

export enum LogLevel {
    info = 0x1,
    notice = 0x2,
    warning = 0x4,
    error = 0x8,
    all = 0xf
}

export class Log {
    private logFile: WriteStream | null = null;
    private stdoutOn: boolean = true;

    constructor (private logLevel: LogLevel = LogLevel.all, logFile: string = '') {
        if (logFile)
            this.logFile = createWriteStream(logFile, {flags:'a'});
    }

    private doLog(consoleMsg: string, logMsg: string) {
        if (this.stdoutOn)
            console.log(consoleMsg);
            
        if (this.logFile) {
            const d = new Date();
            this.logFile.write(`[${d.toLocaleString()} ${logMsg}\n`);
        }
    }

    setStdoutOn(): void {
        this.stdoutOn = true;
    }

    setStdoutOff(): void {
        this.stdoutOn = false;
    }

    close() {
        if (this.logFile)
            this.logFile.close();
        this.logLevel = 0;
    }

    info(msg: string): void {
        if (!(this.logLevel & 0x1))
            return;

        this.doLog(ch.green(msg), ` INFO] ${msg}`);
    }

    notice(msg: string): void {
        if (!(this.logLevel & 0x2))
            return;

        this.doLog(ch.magenta(msg), ` NOTICE] ${msg}`);
    }

    warning (msg: string): void {
        if (!(this.logLevel & 0x4))
            return;

        this.doLog(ch.yellow(msg), ` WARNING] ${msg}`);
    }

    error (msg: string): void {
        if (!(this.logLevel & 0x8))
            return;
        
        this.doLog(ch.red(msg), ` ERROR] ${msg}`);
    }
}