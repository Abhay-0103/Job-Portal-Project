import React from 'react'

// Local Imports
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Analytics from './components/Analytics'

const LandindPage = () => {
  return (
    <div className='min-h-screen mb-[100vh]'>
      <Header />
      <Hero />
      <Features />
      <Analytics />
    </div>
  )
}

export default LandindPage