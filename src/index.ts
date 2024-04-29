export class Log {
  static new(msg: string) {
    console.log(`\x1b[32m${msg}\x1b[0m`);
  }
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }
  static danger(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }
  static warning(msg: string) {
    console.log(`%c ${msg}`, "color: orange");
  }
  static info(msg: string) {
    console.log(`%c ${msg}`, "color: blue");
  }
  static log(msg: string) {
    console.log(msg);
  }
  static custom(msg: string, color: string) {
    console.log(`%c ${msg}`, `color: ${color}`);
  }
}
