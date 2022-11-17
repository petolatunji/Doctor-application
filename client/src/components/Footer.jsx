import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

import { mobile } from '../respone.js'

const Footer = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #008080;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    ${mobile({
      width: 'auto',
      maxWidth: '380px',
    })}
  `
  const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    margin-top: 50px;
    margin-bottom: 30px;
    ${mobile({
      flexDirection: 'column',
      padding: '20px',
    })}
  `
  const Menu = styled.div`
    ${mobile({
      marginBottom: '20px',
    })}
  `
  const Section = styled.div`
    ${mobile({
      marginBottom: '20px',
    })}
  `
  const Contact = styled.div`
    ${mobile({
      marginBottom: '20px',
    })}
  `
  const Social = styled.div`
    display: flex;
    flex-direction: column;
    ${mobile({
      marginBottom: '20px',
    })}
  `
  const Icons = styled.div`
    display: flex;
    gap: 10px;
  `
  const Para = styled.p`
    margin-bottom: 10px;
    cursor: pointer;
    font-size: 24px;
    ${mobile({
      fontSize: '18px',
    })}
  `
  const Head = styled.h1`
    margin-bottom: 20px;
    ${mobile({
      marginBottom: '10px',
      fontSize: '24px',
    })}
  `
  const Line = styled.hr`
    font-weight: 900;
  `
  const Copy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 20px;
    flex-direction: column;
    color: white;
    ${mobile({
      padding: '20px',
    })}
  `
  const Comp = styled.h1`
    margin-bottom: 10px;
  `
  const Right = styled.p`
    font-size: 24px;
    ${mobile({
      fontSize: '16px',
    })}
  `

  const Btn = styled.p``
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Menu>
            <Head>Menu</Head>
            <Para>About General</Para>
            <Para>Advertisements</Para>
            <Para> Doctors</Para>
            <Para>Support</Para>
          </Menu>

          <Section>
            <Head>Section</Head>
            <Para>Emergency and Surgery</Para>
            <Para>Fitness</Para>
            <Para>Pharmacy</Para>
            <Para>Sick bay</Para>
          </Section>
          <Contact>
            <Head>Contact Us</Head>
            <Para>+2348132163481</Para>
            <Para>peterolatunji1@gmail.com</Para>
          </Contact>
          <Social>
            <Head>Social</Head>
            <Icons>
              <Btn>
                <a
                  href='https://www.facebook.com'
                  relative='path'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FacebookIcon
                    style={{
                      backgroundColor: 'white',
                      padding: '5px',
                      color: '#008080',
                      borderRadius: '50%',
                      fontSize: '32px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Btn>

              <Btn>
                <a
                  href='https://www.twitter.com/petolatunji'
                  relative='path'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  target='_blank'
                  rel='noreferrer'
                >
                  <TwitterIcon
                    style={{
                      backgroundColor: 'white',
                      padding: '5px',
                      color: '#008080',
                      borderRadius: '50%',
                      fontSize: '32px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Btn>
              <Btn>
                <a
                  href='https://github.com/petolatunji'
                  relative='path'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  target='_blank'
                  rel='noreferrer'
                >
                  <GitHubIcon
                    style={{
                      backgroundColor: 'white',
                      padding: '5px',
                      color: '#008080',
                      borderRadius: '50%',
                      fontSize: '32px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Btn>

              <Btn>
                <a
                  href='https://www.linkedin.com/in/babatunde-olatunji-peter-1b5181119'
                  relative='path'
                  style={{
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                  target='_blank'
                  rel='noreferrer'
                >
                  <LinkedInIcon
                    style={{
                      backgroundColor: 'white',
                      padding: '5px',
                      color: '#008080',
                      borderRadius: '50%',
                      fontSize: '32px',
                      marginLeft: '10px',
                      cursor: 'pointer',
                    }}
                  />
                </a>
              </Btn>
            </Icons>
          </Social>
        </Holder>
        <Line></Line>
        <Copy>
          <Comp>General</Comp>
          <Right>©️ Petolatunji, 2022 All rights Reserved </Right>
        </Copy>
      </Wrapper>
    </Container>
  )
}

export default Footer
