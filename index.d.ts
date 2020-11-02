export default interface Log {
    setLogLevel(newLevel: number): void;
    info(msg: string): void;
    notice(msg: string): void;
    warning(msg: string): void;
    error(msg: string): void;
}