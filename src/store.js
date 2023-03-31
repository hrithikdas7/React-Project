// to store updated state
import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restuarantListReducer } from "./reducers/restuarantListReducer";

const reducers = combineReducers({
restListReducer:restuarantListReducer
})
const middleware = [thunk]
const store =createStore(reducers,applyMiddleware(...middleware))

export default store