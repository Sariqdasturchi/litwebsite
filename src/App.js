import React from 'react'
import Header from './components/header/header'
import Home from './pages/home/home'
import About from './pages/about/about'
import './App.css'
import Karusel from './pages/karusel/karusel'
import Information from './pages/information/information'
import Result from './pages/result/result'
import Contact from './pages/contact/contact'
import Faq from './pages/faq/faq'


export default function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Karusel/>
      <Information/>
      <Result/>
      <Contact/>
      <Faq/>
    </>
  )
}
