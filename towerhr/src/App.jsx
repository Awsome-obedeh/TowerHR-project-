import { useState } from 'react'
import SideNav from './components/mainNavigation/sideNav';
import Topnav from './components/mainNavigation/topnav';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Topnav/> */}
     <SideNav/>
    </>
  )
}

export default App
