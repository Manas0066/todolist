import { legacy_createStore as createRoot } from "redux";
import { rootreducer } from "./rootreducer";


export const store=createRoot(
    rootreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)