import { useState } from 'react'
import Navbar from './Navbar'
import './App.css'
import Footer from './Footer'
import lushCardData from '../lushCardData'
import LushCard from './LushCard'
import data from '../cardData'
import Card from './Card'


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
  
  const handleCardClick = (title) => {console.log({title})}

  return (
    <div className='App'>
      <Navbar { ...propsNavbar } />

      <main>
        {/* <LushCard cardData = {lushCardData} /> */}
        { data.map((card,i) => {
          return <Card  cardClicked={handleCardClick}  key={i}  title={card.title} > {card.children} </Card>
        }) }
      </main>

      <Footer/>
    </div>
  )
}

export default App
