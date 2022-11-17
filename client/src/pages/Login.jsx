import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import EmailIcon from '@mui/icons-material/Email'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { login } from '../redux/apiCalls'
import { redirect } from 'react-router-dom'
import { mobile } from '../respone.js'

const Container = styled.div`
  display: flex;
  padding-left: 50px;
  padding-top: 50px;
  height: 100vh;
  background-color: #f5f5e9;
  align-items: center;
  flex-direction: column;

  ${mobile({
    paddingTop: '20px',
    height: '50vh',
  })}
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;

  max-width: 1400px;
  justify-content: center;
  background-color: white;
  ${mobile({
    justifyContent: 'start',
  })}
`
const Navbar = styled.div`
  display: flex;
  margin-bottom: 50px;
`
const Left = styled.div`
  display: flex;

  gap: 50px;
  margin-right: 100px;
  ${mobile({
    marginRight: '20px',
    gap: '0px',
  })}
`
const Logo = styled.span`
  color: #253d5b;
  font-size: 20px;
  font-weight: 600;
`
const Right = styled.div`
  display: flex;
  gap: 50px;
  ${mobile({
    gap: '0px',
  })}
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
  background-color: #040404;
  padding: 10px;
  border: none;
  color: white;
  background: #008080;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 20px;

  &:disabled {
    cursor: not-allowed;
  }
  ${mobile({
    width: '84%',
  })}
`
const Error = styled.span`
  color: red;
`

const Fi = styled.div`
  display: flex;
  align-items: center;
`
const Last = styled.div`
  display: flex;
`
const Pa = styled.p`
  margin-left: 10px;
`
const Visible = styled(VisibilityIcon)`
  color: #008080;
  font-size: 60px;
  margin-right: 20px;
  cursor: pointer;
  align-items: center;
`
const Visibeoff = styled(VisibilityOffIcon)`
  color: #008080;
  font-size: 60px;
  margin-right: 20px;
  cursor: pointer;
  align-items: center;
`
const IconDiv = styled.div``

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const { isFetching, error } = useSelector((state) => state.user)

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password })
  }

  // show password
  const [values, setValues] = useState({ password: '', showPassword: false })
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouse = (e) => {
    e.preventDefault()
  }
  const handlePassword = (prop) => (e) => {
    setValues({ ...values, [prop]: e.target.value })
  }

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
            <Title>Login</Title>
            <Form onSubmit={handleSubmit}>
              <Fi>
                <EmailIcon
                  style={{
                    color: '#008080',
                    alignItems: 'center',
                    marginRight: '20px',
                  }}
                />

                <Input
                  placeholder='Enter your email'
                  type='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Fi>
              <Fi>
                <IconDiv onClick={handleClickShowPassword}>
                  {values.showPassword ? (
                    <Visibeoff></Visibeoff>
                  ) : (
                    <Visible></Visible>
                  )}
                </IconDiv>

                <Input
                  placeholder='Enter your password'
                  type={values.showPassword ? 'text' : 'password'}
                  required
                  onChange={(e) => setPassword(e.target.value, 'password')}
                  /**onChange={handlePassword('password')}**/
                />
              </Fi>

              <Button onClick={handleClick} disabled={isFetching}>
                Login
              </Button>
              {error && <Error>Something went wrong...</Error>}
              <Last>
                <Para>Dont have an account?</Para>
                <Pa>
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
                </Pa>
              </Last>
            </Form>
          </Body>
        </Total>
      </Wrapper>
    </Container>
  )
}

export default Login
