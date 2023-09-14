import { useState } from 'react'
import SideNav from './components/mainNavigation/sideNav'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SideNav/>
    </>
  )
}

export default App
