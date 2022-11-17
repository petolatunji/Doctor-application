import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { mobile } from '../respone.js'

const Covid = () => {
  const Cov = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    align-content: center;
    margin-left: 60px;
  `

  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #008080;
    overflow: hidden;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `
  const Content = styled.div`
    display: flex;
    animation: cov 20s linear alternate-reverse infinite;
    @keyframes cov {
      to {
        transform: translate(-100vw);
      }
    }
    animation-iteration-count: infinite;
  `

  const Timage = styled.img`
    height: 120px;
    width: 120px;
    object-fit: cover;
    border-radius: 50%;
  `
  const Image = styled.img`
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 50%;

    margin-bottom: 20px;
  `
  const Title = styled.h1`
    color: white;
    font-size: 48px;
  `
  const Para = styled.p`
    color: white;
    font-size: 20px;
  `
  const Titc = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 100px;
  `
  return (
    <Container>
      <Wrapper>
        <Titc>
          <Timage src='https://media.istockphoto.com/photos/mutating-virus-variant-picture-id1356114754?k=20&m=1356114754&s=612x612&w=0&h=huzBrle-P4YW2viac2xiqrz9MCqX1URlaw6Rr0L76RQ=' />
          <Title>Covid-19 Guidelines</Title>
        </Titc>
        <Content>
          <Cov>
            <Image src='https://images.unsplash.com/photo-1597926576494-ccac65605ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
            <Para>Use Face Mask</Para>
          </Cov>
          <Cov>
            <Image src='https://images.unsplash.com/photo-1580893246395-52aead8960dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFuZCUyMHNoYWtlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
            <Para>Avoid Hand Shakes</Para>
          </Cov>
          <Cov>
            <Image src='https://media.istockphoto.com/photos/washing-hands-picture-id467706864?k=20&m=467706864&s=612x612&w=0&h=a7dKJxdwY8eSg1Z6g-GzXNjATQChiMr5O_POIA0hfng=' />
            <Para>Wash Your Hand</Para>
          </Cov>
          <Cov>
            <Image src='https://media.istockphoto.com/photos/photograph-of-a-finger-pumping-sanitizer-onto-hand-picture-id173869736?k=20&m=173869736&s=612x612&w=0&h=OjM8q8q9QQXEf63cUD4B3xHGgAIJL4OrzEDJYYSZnS8=' />
            <Para>Use Hand Sanitazizers</Para>
          </Cov>
          <Cov>
            <Image src='https://images.unsplash.com/photo-1603484702795-00cf782f1ae6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29jaWFsJTIwZGlzdGFuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
            <Para>Social Distance</Para>
          </Cov>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Covid
