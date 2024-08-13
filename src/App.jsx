import { useState } from 'react'
import router from './router/router'
import { RouterProvider } from 'react-router-dom'
import ThemeProvider from './utils/ThemeContext'

function App() {

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>)
}

export default App
