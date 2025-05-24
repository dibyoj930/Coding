class EventEmitter {
    constructor() {
      this.events = {};
    }
    on(event, listener) {
      if (!this.events[event]) this.events[event] = [];
      this.events[event].push(listener);
    }
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach((listener) => listener(...args));
      }
    }
    off(event, listener) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter((l) => l !== listener);
    }
  }
//   const emitter = new EventEmitter();
// emitter.on("log", (msg) => console.log(msg));
// emitter.emit("log", "Hello World!"); // Output: Hello World!