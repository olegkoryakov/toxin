interface IEvents {
  [eventName: string]: Function[],
}

interface IEventEmitter {
  on(eventName: string, callback: Function): void,
  emit(eventName: string, arg: any): void,
}
