import React from 'react'
import styled from 'styled-components'
import { mobile } from '../respone.js'
import { Link } from 'react-router-dom'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const SidebarCont = styled.div`
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #008080;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};

  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
  position: absolute;
  top: 20px;
  right: 24px;
  background: transparent;
  font-size: 32px;
  cursor: pointer;
  outline: none;
  color: white;
`
const SiderbarWrapper = styled.div`
  color: white;
`
const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 60px);
  text-align: center;

  ${mobile({
    gridTemplateRows: 'repeat(6, 60px)',
  })}
`
const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: white;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    color: blue;
  }
`
const SideBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
`

const SideBtnLink = styled(Link)`
  border-radius: 10px;
  background: white;
  color: #008080;
  font-size: 24px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: blue;
  }
`
const Photo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
  align-items: center;
`
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarCont isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SiderbarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='/doctors'>
            Find Doctor
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/profile'>
            User Profile
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/contact'>
            Contact
          </SidebarLink>
          <SidebarLink onClick={toggle} to='/register'>
            Register
          </SidebarLink>
        </SidebarMenu>
        <SideBtn>
          <SideBtnLink onClick={toggle} to='/login'>
            Login
          </SideBtnLink>
        </SideBtn>
        <Photo>
          <Image src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </Photo>
      </SiderbarWrapper>
    </SidebarCont>
  )
}

export default Sidebar
