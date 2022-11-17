import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EmailIcon from '@mui/icons-material/Email'
import { mobile } from '../respone.js'

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const Container = styled.div`
    display: flex;
    padding-left: 50px;
    padding-top: 50px;
    height: 100vh;
    background-color: #f5f5e9;
    align-items: center;
    flex-direction: column;
  `
  const Wrapper = styled.div`
    display: flex;
    align-items: center;

    max-width: 1400px;
    justify-content: center;
    background-color: white;
  `
  const Navbar = styled.div`
    display: flex;
    margin-bottom: 50px;
  `
  const Left = styled.div`
    display: flex;

    gap: 50px;
    margin-right: 100px;
  `
  const Logo = styled.span`
    color: #253d5b;
    font-size: 20px;
    font-weight: 600;
  `
  const Right = styled.div`
    display: flex;

    gap: 50px;
  `
  const Li = styled.a`
    cursor: pointer;
    color: white;
    font-size: 20px;
    text-decoration: none;
  `
  const Total = styled.div``
  const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;
  `
  const Title = styled.h1`
    margin-top: 30px;
    margin-bottom: 30px;
    color: #008080;
    ${mobile({
      marginTop: '10px',
      marginBottom: '10px',
      textAlign: 'center',
    })}
  `
  const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 60px;
    background-color: white;
    width: 400px;
    gap: 20px;
  `

  const Input = styled.input`
    padding: 10px;
    border: none;
    border-bottom: 2px solid #008080;
    width: 100%;
    margin-bottom: 20px;
    ${mobile({
      width: '70%',
    })}
  `
  const Para = styled.p``
  const Button = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    background: #008080;
    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 20px;
    ${mobile({
      width: '84%',
    })}
  `
  const Fi = styled.div`
    display: flex;
    align-items: center;
  `
  const Last = styled.div`
    display: flex;
    align-items: center;
  `
  const Pa = styled.p`
    margin-left: 10px;
  `
  const StyledBtn = styled(EmailIcon)``

  return (
    <Container>
      <Navbar>
        <Left>
          <Logo>General</Logo>
        </Left>
        <Right>
          <Li>
            <Link
              to='/'
              style={{
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </Li>
        </Right>
      </Navbar>
      <Wrapper>
        <Total>
          <Body>
            <Title>Create new account</Title>
            <Form onSubmit={handleSubmit}>
              <Fi>
                <PersonIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />
                <Input
                  placeholder='Enter your first name'
                  type='text'
                  required
                />
              </Fi>
              <Fi>
                <PersonIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />
                <Input
                  placeholder='Enter your last name'
                  type='text'
                  required
                />
              </Fi>
              <Fi>
                <EmailIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />

                <Input placeholder='Enter your email' type='email' required />
              </Fi>
              <Fi>
                <VisibilityIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />
                <Input
                  placeholder='Enter your password'
                  type='password'
                  required
                />
              </Fi>
              <Fi>
                <VisibilityIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />
                <Input
                  placeholder='Confirm your password'
                  type='password'
                  required
                />
              </Fi>
              <Last>
                <Para>Already A Member?</Para>

                <Pa>
                  <Li>
                    <Link
                      to='/login'
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      Login
                    </Link>
                  </Li>
                </Pa>
              </Last>

              <Button>Create Account</Button>
            </Form>
          </Body>
        </Total>
      </Wrapper>
    </Container>
  )
}

export default Register
