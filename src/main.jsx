import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './store'
import { Provider } from 'react-redux'
import './index.css'
import "./fonts/brotherDeluxe1350____2011.ttf"
import "./fonts/CuttyFruty.ttf"
import "./fonts/Montserrat-Bold.ttf"
import "./fonts/Montserrat-Regular.ttf"
import "./fonts/NASHVILL.TTF"
import "./fonts/RadiantAntique.ttf"
import "./fonts/glyphicons-halflings-regular.ttf"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
