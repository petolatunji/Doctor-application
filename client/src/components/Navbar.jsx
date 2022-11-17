import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { mobile } from '../respone.js'

const Close = styled(CloseIcon)`
  color: #008080;
  font-size: 60px;
  margin-left: 10px;
  cursor: pointer;
  display: none;
`
const Bar = styled(HorizontalSplitIcon)`
  color: #008080;
  font-size: 60px;
  margin-left: 10px;
  cursor: pointer;
  display: none;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  background-color: #f5f5e9;
`
const Wrapper = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  max-width: 1400px;
  justify-content: space-between;
`
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const Logo = styled.span`
  color: #253d5b;
  font-size: 20px;
  font-weight: 600;
`
const Right = styled.div`
  display: ${(props) => (props.primary ? 'none' : 'flex')};

  align-items: center;
  justify-content: center;
  gap: 50px;
  ${mobile({
    display: '${(props) => (props.primary ? block : none)}',
    position: 'absolute',
    top: '60px',
    left: '0',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100vh - 77px)',
    backgroundColor: 'white',
    borderTop: '1px solid black',
    backgroundColor: 'transparent',
  })}
`
const Li = styled.a`
  cursor: pointer;
  color: #253d5b;
  font-size: 20px;
  text-decoration: none;
`
const Button = styled.button`
  background-color: #008080;
  padding: 10px;
  border: none;
  color: white;
  background: ${(props) => (props.primary ? '#008080' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#008080')};

  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &.active {
    color: red;
  }
`
const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`
const Div = styled.div`
  display: none;
  ${mobile({
    display: 'block',
    fontSize: '1.9rem',
    top: '0',
    right: '0',
    position: 'absolute',
    cursor: 'pointer',
    transform: 'translate(-100%, 75%)',
  })}
`

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const handleClick = () => setClick(!click)
  const handleClose = () => setIsNavExpanded(!isNavExpanded)

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>GENERAL</Logo>
        </Left>
        <Right>
          <Li>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Home
            </Link>
          </Li>
          <Li>
            <Link
              to='/doctors'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Find a doctor
            </Link>
          </Li>
          <Link
            to='/profile'
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            User Profile
          </Link>
          <Li>
            <Link
              to='/contact'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Contact
            </Link>
          </Li>
          <Li>
            <Link
              to='/register'
              style={{
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          </Li>
          <Button primary>
            <Link
              to='/login'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              Login
            </Link>
          </Button>
          <Image src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
        </Right>
        {isNavExpanded && (
          <Right primary>
            <Li>
              <Link
                to='/'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Home
              </Link>
            </Li>
            <Li>
              <Link
                to='/doctors'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Find a doctor
              </Link>
            </Li>
            <Link
              to='/profile'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              User Profile
            </Link>
            <Li>
              <Link
                to='/contact'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Contact
              </Link>
            </Li>

            <Li>
              <Link
                to='/register'
                style={{
                  textDecoration: 'none',
                }}
              >
                Register
              </Link>
            </Li>
            <Button primary>
              <Link
                to='/login'
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                Login
              </Link>
            </Button>
            <Image src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
          </Right>
        )}
        <Div onClick={handleClick}>
          {click ? <Close></Close> : <Bar onClick={handleClose}></Bar>}
        </Div>
      </Wrapper>
    </Container>
  )
}

export default Navbar
