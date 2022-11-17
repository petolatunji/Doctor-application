import React from 'react'
import Nav from '../components/Nav'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
    </>
  )
}

export default Navbars
