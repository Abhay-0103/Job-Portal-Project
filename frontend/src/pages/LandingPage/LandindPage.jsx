import React from 'react'

// Local Imports
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'
import Footer from './components/Footer'

const LandindPage = () => {
  return (
    <div className='min-h-screen'>
      <Header />
      <Hero />
      <Features />
      <Analytics />
      <Footer />


    </div>
  )
}

export default LandindPage