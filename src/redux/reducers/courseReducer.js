// remember, all reducers accept state and action as their arguments
// now, we need to initialize state, so we use the default arg syntax
// which is state = [], because state will be an empty array of courses
export default function courseReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_COURSE":
      return [...state, {...action.course}]
    default:
      return state;
  }
}