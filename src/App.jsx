import { Login, Signup, User } from './components'
import { Routes, Route } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <>
      <Routes>
        <Route index path='/signup' element={<Signup />} />
        <Route index path='/login' element={<Login />} />
        <Route index path='/' element={<User />} />
      </Routes>
    </>
  )
}
