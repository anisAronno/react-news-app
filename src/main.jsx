import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NewsProvider from './context/NewsContext.jsx'
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <NewsProvider>
        <App />
      </NewsProvider>
    </UserProvider>
  </React.StrictMode>
)
