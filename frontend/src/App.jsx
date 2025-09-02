import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import NoteData from './pages/NoteData.jsx'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme = "coffee"className="relative min-h-screen">
      <Routes>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/create" element={<CreatePage/>} />
        <Route path = "/note/:id" element={<NoteData/>} />
      </Routes>
    </div>
  )
}

export default App