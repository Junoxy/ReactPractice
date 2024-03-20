import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Footer from './Footer'
import lushCardData from '../lushCardData'
import LushCard from './LushCard'
function App() {
  
  const home = {url:"/home", text:"Home"}
  const shop = {url:"/shop", text:"Shop"}
  const info = {url:"/info", text:"Info"}
  const profile = {url:"/profile", text:"Profile"}
  const links = [home,shop,info,profile]

  const propsNavbar = {
    logo:"/techoverlogo-230116-082629.png",
    navLinks: links
  }
  

  return (
    <div className='App'>
      <Navbar { ...propsNavbar } />

      <main>
        <LushCard cardData = {lushCardData} />
      </main>

      <Footer/>
    </div>
  )
}

export default App
