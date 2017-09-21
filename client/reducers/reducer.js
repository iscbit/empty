import { DO_MAGIC } from "../actions/actionList";
import { fromJS } from "immutable";
const initialState = fromJS({
  test: "Meg fogok változni!"
});
const reducer = (state = initialState, action) => {
  if (action.type == DO_MAGIC) {
    return state.set("test", action.message);
  }

  return state;
};

export default reducer;
