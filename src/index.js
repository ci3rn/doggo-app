import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import DoggoApp from './components/DoggoApp'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <DoggoApp />
  </React.StrictMode>
)