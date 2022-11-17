import React from 'react'
import styled from 'styled-components'
import { mobile } from '../respone.js'

const Chose = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 100px;
    ${mobile({
      marginTop: '50px',
      marginBottom: '50px',
    })}
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;
  `
  const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    margin-top: 50px;
    ${mobile({
      marginBottom: '25px',
      marginTop: '25px',
    })}
  `
  const Tit = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    ${mobile({
      fontSize: '20px',
    })}
  `
  const Sub = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    flex-direction: column;
    ${mobile({
      marginBottom: '10px',
    })}
  `

  const Head = styled.h1`
    color: #008080;
    margin-bottom: 30px;

    ${mobile({
      marginBottom: '0px',
      textAlign: 'center',
    })}
  `
  const Para = styled.p`
    text-align: center;
    margin-bottom: 30px;
    color: #008080;
    font-size: 20px;
    ${mobile({
      marginBottom: '20px',
      fontSize: '14px',
      padding: '10px',
    })}
  `
  const Final = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
      gap: '20px',
    })}
  `
  const Total = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid lightgray;
    width: 20%;
    background-color: #008080;
    align-items: center;
    ${mobile({
      width: '80%',
    })}
  `
  const Image = styled.img`
    height: 200px;
    width: 100%;
    object-fit: cover;
  `
  const Th = styled.h1`
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    ${mobile({
      marginBottom: '10px',
      marginTop: '10px',
    })}
  `
  const Tp = styled.p`
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 18px;
  `

  return (
    <Container>
      <Wrapper>
        <Title>
          <Tit>Why Choose Us</Tit>
        </Title>
        <Sub>
          <Head>Get Benefts & Advantages</Head>
          <Para>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            obcaecati blanditiis fuga. Iste minus maxime consequuntur esse,
            repellendus qui, aliquam fugit temporibus doloremque quis dicta
            laboriosam fuga eius cumque vero sint ea autem similique culpa
            facilis quas tenetur. Rem voluptas a obcaecati dolorum enim tempore
            neque maxime nesciunt dolor doloremque!
          </Para>
        </Sub>
        <Final>
          <Total>
            <Image src='https://media.istockphoto.com/photos/stamp-12-month-warranty-picture-id183067200?k=20&m=183067200&s=612x612&w=0&h=6hPCcS7p5roJsqGKPKcnbPThfSxUmpcJImHwr1XDcrk=' />
            <Th>1 Year Free Trial</Th>
            <Tp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aspernatur tempora magni? Deserunt provident autem
              error maxime repellendus ipsum.
            </Tp>
          </Total>
          <Total>
            <Image src='https://media.istockphoto.com/photos/tag-on-chalkboard-background-3d-rendering-picture-id1176817322?k=20&m=1176817322&s=612x612&w=0&h=T1ca0_6cclS9LN86GMc-UbeTKzQw7q8pAy_4f8NLFwY=' />
            <Th>Affordable</Th>
            <Tp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aspernatur tempora magni? Deserunt provident autem
              error maxime repellendus ipsum.
            </Tp>
          </Total>
          <Total>
            <Image src='https://media.istockphoto.com/photos/cheerful-medical-students-taking-selfie-and-having-fun-at-the-picture-id1346227626?k=20&m=1346227626&s=612x612&w=0&h=V7CDbG2INfAI61W9KULePcYmAcSR1M_xBgzv9CuI3Lg=' />
            <Th>Friendly Staff's</Th>
            <Tp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aspernatur tempora magni? Deserunt provident autem
              error maxime repellendus ipsum.
            </Tp>
          </Total>
          <Total>
            <Image src='https://media.istockphoto.com/photos/yes-were-open-sign-isolated-picture-id1189869351?k=20&m=1189869351&s=612x612&w=0&h=s7vHntxA6DklV1SvzVwqegmfp63ZckgsqfDD9AI-7ps=' />
            <Th>24 Hours Service</Th>
            <Tp>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto aspernatur tempora magni? Deserunt provident autem
              error maxime repellendus ipsum.
            </Tp>
          </Total>
        </Final>
      </Wrapper>
    </Container>
  )
}

export default Chose
