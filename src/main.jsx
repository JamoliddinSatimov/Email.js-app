
import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyles } from './styles/Global-styles'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
)
