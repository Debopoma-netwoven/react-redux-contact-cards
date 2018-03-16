import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import { AppContainer } from "./containers/app-container";
import store from "./store";

const app = (
    <Provider store={store}>
        <AppContainer />
    </Provider>
);

render(app, document.getElementById("app"));