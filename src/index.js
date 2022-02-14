import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App'
import Reducers from "./reducers"       //by default file choosed in a dir is index.js

ReactDom.render(
  <Provider store = {createStore(Reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
)