export default class EventEmitter implements IEventEmitter {
  constructor() {
    this.events = {};
  }

  private events: IEvents;

  on(eventName: string, callback: Function) {
    if (this.events[eventName] === undefined) this.events[eventName] = [];
    this.events[eventName].push(callback);
  }

  emit(eventName: string, arg: any): void {
    const events = this.events[eventName];
    events.forEach((callbalck) => {
      callbalck(arg);
    });
  }
}
