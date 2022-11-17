import styled from 'styled-components'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState, useContext } from 'react'
import { mobile } from '../respone.js'

const Contact = () => {
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_deg0s1v',
        'template_1e0ja7l',
        formRef.current,
        'GQhEF6oBPCG2WErx3'
      )
      .then(
        (result) => {
          console.log(result.text)
          setDone(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5f5e9;
    margin-top: 50px;
    margin-bottom: 50px;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
  `
  const Body = styled.div`
    display: flex;
    gap: 30px;
    ${mobile({
      flexDirection: 'column',
    })}
  `
  const Left = styled.div`
    flex: 1;
    margin-right: 50px;
  `
  const Image = styled.img`
    object-fit: cover;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    ${mobile({
      width: '90%',
      height: '90%',
    })}
  `
  const Right = styled.div`
    flex: 2;
  `
  const Title = styled.h1`
    margin-bottom: 30px;
    ${mobile({
      padding: '15px',
    })}
  `
  const Div = styled.div``
  const Span = styled.p`
    margin-top: 10px;
  `
  const Input = styled.input`
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #008080;
    width: 100%;
    margin-bottom: 20px;
    ${mobile({
      width: '90%',
    })}
  `
  const Message = styled.textarea`
    margin-top: 10px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #008080;
    width: 100%;
    margin-bottom: 20px;
    ${mobile({
      width: '90%',
    })}
  `
  const Button = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 30px;
    margin-right: 20px;
  `
  const Cont = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 50px;
    ${mobile({
      flexDirection: 'column',
      gap: '20px',
    })}
  `
  const Call = styled.div`
    background-color: #008080;
    border-radius: 10px;
    padding: 20px;
    width: 28%;
    color: white;
    ${mobile({
      width: '80%',
    })}
  `
  const Sub = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  `
  const Pa = styled.h3``
  const Pat = styled.p`
    margin-bottom: 100px;
    ${mobile({
      marginBotom: '50px',
    })}
  `
  const Whatapp = styled.div`
    display: flex;
    align-items: center;
    background-color: #008080;
    padding: 50px;
    justify-content: center;
    border-radius: 10px;
    width: 80%;
    justify-content: center;
    margin-left: 100px;
    margin-top: 50px;
    margin-bottom: 30px;
    ${mobile({
      flexDirection: 'column',
      marginLeft: '10px',
      width: '80%',
      marginTop: '20px',
      paddingTop: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      alignContent: 'center',
    })}
  `
  const What = styled.p`
    color: white;
    margin-right: 50px;
    font-size: 36px;
    ${mobile({
      fontSize: '16px',
      textAlign: 'center',
      padding: '10px',
      marginRight: '0px',
    })}
  `
  const Btn = styled.button`
    background-color: white;
    padding: 10px;
    border: none;
    color: #008080;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 600;
    ${mobile({
      marginTop: '20px',
      padding: '5px',
      fontSize: '16px',
    })}
  `
  const Form = styled.form`
    ${mobile({
      padding: '15px',
    })}
  `
  return (
    <Container>
      <Wrapper>
        <Body>
          <Left>
            <Image src='https://media.istockphoto.com/photos/highfive-my-little-but-brave-patient-picture-id493083892?k=20&m=493083892&s=612x612&w=0&h=4KfQ9C-hV1baEOKjGe2Lr5WU_-W9cefien27OYXDoJo=' />
          </Left>
          <Right>
            <Title>Contact Us</Title>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Div>
                <Span>Name</Span>
                <Input
                  type='text'
                  placeholder='Enter your name'
                  required
                  name='user_name'
                />
              </Div>
              <Div>
                <Span>Email</Span>
                <Input
                  type='email'
                  placeholder='Enter a valid email address'
                  required
                  name='user_email'
                />
              </Div>
              <Div>
                <Span>Message</Span>
                <Message
                  placeholder='Type your message here'
                  required
                  name='message'
                />
              </Div>
              <Button>Submit</Button>
              {done && 'Thanks for contacting us'}
            </Form>
          </Right>
        </Body>
        <Cont>
          <Call>
            <Sub>
              <PhoneIcon
                style={{
                  color: 'white',

                  fontSize: '20px',
                }}
              />
              <Pa>Call Us</Pa>
            </Sub>

            <Pat>(+234) 8132163481 </Pat>
          </Call>
          <Call>
            <Sub>
              <AccessTimeIcon
                style={{
                  color: 'white',

                  fontSize: '20px',
                }}
              />
              <Pa>HOURS</Pa>
            </Sub>
            <Pat>Monday - Sunday : 24 Hours </Pat>
          </Call>
          <Call>
            <Sub>
              <LocationOnIcon
                style={{
                  color: 'white',

                  fontSize: '20px',
                }}
              />
              <Pa>LOCATION</Pa>
            </Sub>
            <Pat>Ita Alamu Area , Ilorin, Kwara State, Nigeria </Pat>
          </Call>
        </Cont>
        <Whatapp>
          <What>Want to make an appointment easily?</What>
          <Btn>
            <a
              href='https://wa.me/+2348132163481'
              relative='path'
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
              target='_blank'
              rel='noreferrer'
            >
              Contact Here
            </a>
          </Btn>
        </Whatapp>
      </Wrapper>
    </Container>
  )
}

export default Contact
