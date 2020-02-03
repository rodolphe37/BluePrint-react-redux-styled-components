import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import history from "../history";
import color from "./colorReducer";
export default combineReducers({
  color,
  router: connectRouter(history),
});