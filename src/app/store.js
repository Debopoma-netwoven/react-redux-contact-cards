import { createStore,applyMiddleware } from "redux";
import contactManagementReducer from "./reducers/contact-management-reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { loadingBarMiddleware } from 'react-redux-loading-bar'

const store = createStore(contactManagementReducer,applyMiddleware(thunk,logger));

export default store;