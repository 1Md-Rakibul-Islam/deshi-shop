import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunk from "redux-thunk";

const store = createStore(reducers, {}, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;

// import { createStore } from "redux";
// import { reducers } from "./reducers/index";

// // createStore
// // configureStore.
// const store = createStore(reducers,
//     {}, 
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );

// export default store;