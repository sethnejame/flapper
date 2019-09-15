import { Dispatcher } from "flux";
const dispatcher = new Dispatcher();
export default dispatcher;

// the dispatcher is the central hub for the app
// holds a list of callbacks. all our apps actions
// will be dispatched via this dispatcher item
// stores will register with this dispatcher to say
// that they'd like to be informed when actions occur
