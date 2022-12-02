import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DoggoApp from './components/DoggoApp'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <DoggoApp />
  </React.StrictMode>
)