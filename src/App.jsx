import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Footer from './Footer'

function App() {
  
  const home = {url:"/home", text:"Home"}
  const shop = {url:"/shop", text:"Shop"}
  const info = {url:"/info", text:"Info"}
  const profile = {url:"/profile", text:"Profile"}
  const links = [home,shop,info,profile]

  const propsNavbar = {
    logo:"/public/techoverlogo-230116-082629.png",
    navLinks: links
  }
  return (
    <div className='App'>
      <Navbar { ...propsNavbar } />
      <Footer/>
    </div>
  )
}

export default App
