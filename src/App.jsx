import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router'

import Nav from './components/Nav/Nav'
import Search from './components/Search/Search'
import Tabs from './components/Tabs/Tabs'

import './App.css'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'

export default function App() {

  const navigate = useNavigate()

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/for-sale')
    }
  }, [location, navigate])

  return (
    <div className='App'>
      
      <Nav />

      <div className='App__content'>
        <div className='App__item-container'>
          <h2 className='App__slogan'>Aradağın Her Şey Burada</h2>
        </div>
        <div className='App__item-container'>
          <Search />
        </div>
        <div className='App__item-container'>
          <Tabs />
        </div>
        <div className='App__item-container'>
          <Content />
        </div>
      </div>
      <Footer />

    </div>
  )
}
