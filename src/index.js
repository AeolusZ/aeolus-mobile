import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './App'
import { counter, addGUN, removeGUN } from './index.redux'

const store = createStore(counter)
function render() {
    console.log(store.getState())
    ReactDOM.render(<App store={store} addGUN={addGUN} removeGUN={removeGUN}/>, document.getElementById('root'))
}
store.subscribe(render)
render()


