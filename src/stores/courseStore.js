import { EventEmitter } from "events";
import { thisExpression } from "@babel/types";

const CHANGE_EVENT = "change"

class courseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}
