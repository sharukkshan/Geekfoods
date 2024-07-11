import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import Quote from './Quote'
import quoteArr from './quote.json'
function App() {
 

  return (
    <>
      <Navbar/>
      {quoteArr.map((quote,index)=>{
        return <Quote key={index} quote={quote.quote} author={quote.author}/>
      })}
      <Footer/>
    </>
  )
}

export default App