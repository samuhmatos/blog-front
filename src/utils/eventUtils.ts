import { EventEmitter } from "events";const eventEmitter = new EventEmitter();

interface EventType {
  events: "close-modal";
}

const emit = (eventName: EventType["events"], ...data: []) => {
  eventEmitter.emit(eventName, data);
};

const on = (
  eventName: EventType["events"],
  listener: (...args: any[]) => void
) => {
  eventEmitter.on(eventName, listener);
};

const remove = (
  eventName: EventType["events"],
  listener: (...args: any[]) => void
) => {
  eventEmitter.removeListener(eventName, listener);
};

export const eventUtils = {
  emit,
  on,
  remove,
};
