import styled from 'styled-components'
import { mobile } from '../respone.js'

const Dashboard = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #f5f5e9;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;
  `
  const Title = styled.h1`
    margin-bottom: 50px;
    color: #253d5b;
    ${mobile({
      fontSize: '20px',
      marginBottom: '0px',
      padding: '20px',
    })}
  `
  const Top = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
    })}
  `
  const Left = styled.div`
    background-color: #008080;
    flex: 2;
    display: flex;
    padding: 50px;
    justify-content: space-between;
    border-radius: 5px;
    padding-right: 0px;
    margin-right: 30px;
    height: 300px;
    ${mobile({
      height: '200px',
      padding: '30px',
      width: '80%',
    })}
  `
  const Ld = styled.div``
  const Lr = styled.div``
  const Image = styled.img`
    background-color: #008080;
    ${mobile({
      display: 'none',
    })}
  `
  const Heading = styled.h2`
    color: white;
    margin-bottom: 20px;
  `
  const Para = styled.p`
    color: white;
    font-size: 30px;
    word-spacing: 5px;
    margin-bottom: 10px;
    ${mobile({
      fontSize: '18px',
    })}
  `
  const Parag = styled.p`
    color: white;
    font-size: 30px;
    word-spacing: 5px;
    margin-bottom: 10px;
    ${mobile({
      fontSize: '18px',
    })}
  `
  const Button = styled.button`
    background-color: white;
    padding: 20px;
    border: none;
    color: #008080;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 50px;
    font-weight: 700;
    ${mobile({
      fontSize: '20px',
      padding: '10px',
      marginTop: '20px',
    })}
  `
  const Right = styled.div`
    flex: 1;
    box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    border-radius: 25px 25px 25px 25px;
    -webkit-border-radius: 25px 25px 25px 25px;
    -moz-border-radius: 25px 25px 25px 25px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: white;
    ${mobile({
      display: 'none',
    })}
  `
  const RightCont = styled.div``
  const Righty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    flex-direction: column;
  `
  const Headingr = styled.h3``
  const Photo = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
  `
  const RighPat = styled.p`
    margin-top: 20px;
    color: #253d5b;
    font-size: 20px;
    font-weight: 700;
  `
  const RighPath = styled.p`
    margin-top: 25px;
    font-weight: 400;
  `

  const Bottom = styled.div``
  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <Top>
          <Left>
            <Ld>
              <Heading> Welcome </Heading>
              <Para> Let's check your health with us.</Para>
              <Parag>
                Care with your health from now to get more live better.
              </Parag>
              <Button>Connect to doctor</Button>
            </Ld>
            <Lr>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-_P9Eac7h59rDVRTuev3G6zgTWj59Xqotw&usqp=CAU' />
            </Lr>
          </Left>
          <Right>
            <RightCont>
              <Headingr>Profile</Headingr>
            </RightCont>
            <Righty>
              <Photo src='https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvY3RvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' />
              <RighPat> Babatunde Olatunji </RighPat>
              <RighPath> Malaria Patient</RighPath>
            </Righty>
          </Right>
        </Top>
        <Bottom></Bottom>
      </Wrapper>
    </Container>
  )
}

export default Dashboard
