import React, { Component } from "react";
import Router from "./app/route";
import {Provider} from 'mobx-react'
import store from "./app/store";
export default class App extends Component {
  render() {
    return (
          <Provider {...store}>
            <Router />
          </Provider>
    );
  }
}