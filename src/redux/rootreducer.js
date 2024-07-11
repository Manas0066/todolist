import { combineReducers } from "redux"
import { operationsReducer } from "./todoapp/reducer/operationsReducer"

export const rootreducer = combineReducers({
    operationsReducer,
})