import React from 'react'
import Blood from '../components/Blood'
import Chose from '../components/Chose'
import Covid from '../components/Covid'
import Dashboard from '../components/Dashboard'
import Offer from '../components/Offer'

const Home = () => {
  return (
    <div>
      <Dashboard />
      <Blood />
      <Chose />
      <Covid />
      <Offer />
    </div>
  )
}

export default Home
