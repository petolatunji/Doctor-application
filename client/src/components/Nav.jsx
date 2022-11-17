import styled from 'styled-components'
import { mobile } from '../respone.js'
import { Link } from 'react-router-dom'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #f5f5e9;
  font-size: 16px;
  position: sticky;
  top: 0;
  z-index: 10;

  ${mobile({
    transition: '0.8s all ease',
  })}
`
const NavbarContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`
const NavLogo = styled(Link)`
  color: #008080;
  justify-content: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  font-size: 24px;
  ${mobile({
    marginLeft: '20px',
  })}
`
const MobileIcon = styled.div`
  display: none;

  ${mobile({
    display: 'block',
    position: 'absolute',
    top: '20px',
    right: '20px',
    transform: 'translate(-100,60%)',
    fontSize: '28px',
    cursor: 'pointer',
    color: '#008080',
    margiRight: '20px',
  })}
`
const NavMenu = styled.ul`
  align-items: center;
  list-style: none;
  align-items: center;
  margin-right: -22px;
  display: flex;
  ${mobile({
    display: 'none',
  })}
`
const NavItem = styled.li`
  height: 80px;
`
const NavLinks = styled(Link)`
  color: #008080;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 2px;
  text-decoration: none;
  height: 100%;
  font-size: 24px;
  margin-right: 30px;

  &:active {
    border-bottom: 3px solid #008080;
  }
`
const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 20px;
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    display: 'none',
  })}
`
const NavBtnLink = styled(Link)`
  border-radius: 10px;
  background: #008080;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  outline: none;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #008080;
  }
`
const Photo = styled.div`
  display: flex;
  justify-content: center;
  ${mobile({
    display: 'none',
  })}
`
const Nav = ({ toggle }) => {
  return (
    <>
      <Navbar>
        <NavbarContainer>
          <NavLogo to='/'>GENERAL</NavLogo>
          <MobileIcon onClick={toggle}>
            <HorizontalSplitIcon />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='/doctors'>Find Doctor</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/profile'>User Profile</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/register'>Register</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/login'>Login</NavBtnLink>
          </NavBtn>
          <Photo>
            <Image src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </Photo>
        </NavbarContainer>
      </Navbar>
    </>
  )
}

export default Nav
