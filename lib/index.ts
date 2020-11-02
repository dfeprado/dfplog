// Define o objeto de log
// Utiliza o módulo Chalk para fazer log com cores e implementa nível de log
import ch = require('chalk');

// Objeto que dá meios para fazer os logs.
//  * _logLevel utiliza os primeiros 4 bits de um byte para definir o nível de log (1 - ligado / 0 - desligado):
//      * bit 0: informativo
//      * bit 1: notícias
//      * bit 2: atenção
//      * bit 3: erros
//      ** PADRÃO: 0xf (tudo)
//  * _doLog faz o log no console. Não chame-a diretamete. Utilize as funções info(), notice(), warning() e error().
export = {
    _logLevel: 0xf,
    _doLog: function(msg: string): void {
        console.log(msg);
    },

    setLogLevel(newLevel: number): void {
        this._logLevel = newLevel;
    },

    info: function(msg: string): void {
        if (!(this._logLevel & 0x1))
            return;

        this._doLog(ch.green(msg));
    },

    notice: function(msg: string): void {
        if (!(this._logLevel & 0x2))
            return;

        this._doLog(ch.magenta(msg));
    },

    warning: function(msg: string): void {
        if (!(this._logLevel & 0x4))
            return;

        this._doLog(ch.yellow(msg));
    },

    error: function(msg: string): void {
        if (!(this._logLevel & 0x8))
            return;
        
        this._doLog(ch.red(msg));
    }
}