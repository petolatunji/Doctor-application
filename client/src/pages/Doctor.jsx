import styled from 'styled-components'
import React from 'react'
import { data } from '../data'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { useState } from 'react'
import { mobile } from '../respone.js'

const Doctor = () => {
  const [items, setItems] = useState(data)
  const [visible, setVisible] = useState(6)

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3)
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
  const Total = styled.div``
  const Top = styled.div``
  const Title = styled.h1`
    margin-bottom: 100px;
    text-align: center;
    ${mobile({
      marginBottom: '50px',
      fontSize: '24px',
    })}
  `
  const Imag = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
  const Image = styled.img`
    width: 31%;
    border-radius: 10px;
    object-fit: cover;
  `
  const Bottom = styled.div``
  const Text = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
    align-items: center;
    ${mobile({
      marginTop: '50px',
    })}
  `
  const Td = styled.h2`
    ${mobile({
      marginLeft: '20px',
    })}
  `
  const Tpc = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
  `
  const Tp = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 600;
    &:hover {
      background-color: white;
      color: #008080;
    }
  `
  const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;
  `
  const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
      marginLeft: '20px',
    })}
  `
  const Subcont = styled.div`
    width: 400px;
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
    justify-content: space-between;
    margin-bottom: 50px;
    ${mobile({
      width: '280px',
    })}
  `
  const Photo = styled.img`
    height: 150px;
    width: 150px;
    border-radius: 50%;
    object-fit: cover;
  `
  const Name = styled.h1`
    margin-top: 50px;
    margin-bottom: 20px;
  `
  const Special = styled.p`
    margin-top: 10px;
  `
  const Time = styled.p`
    text-align: center;
  `
  const Ab = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: space-between;
  `
  const Amount = styled.p``
  const Btn = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    font-weight: 600;
  `
  const Tm = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    gap: 20px;
  `
  return (
    <Container>
      <Wrapper>
        <Total>
          <Top>
            <Title>Find A Doctor Or Request An Appointment</Title>
            <Imag>
              <Image src='https://media.istockphoto.com/photos/operating-room-picture-id157607970?k=20&m=157607970&s=612x612&w=0&h=suKE8BabNT1LFkiLzb1JTDcW1PorhA31Dp_qIqK1htc=' />
              <Image src='https://media.istockphoto.com/photos/highfive-my-little-but-brave-patient-picture-id493083892?k=20&m=493083892&s=612x612&w=0&h=4KfQ9C-hV1baEOKjGe2Lr5WU_-W9cefien27OYXDoJo=' />
              <Image src='https://media.istockphoto.com/photos/my-team-holds-lots-of-drive-and-dedication-picture-id1304125351?k=20&m=1304125351&s=612x612&w=0&h=KrjiMitDLYD0zPkTavDnKoHQFxVRREnkHB0B_wGPbZA=' />
            </Imag>
          </Top>
          <Bottom>
            <Text>
              <Td>Top Doctors</Td>
            </Text>
            <Content>
              {items.slice(0, visible).map((item, index) => {
                return (
                  <div key={index}>
                    <Cont>
                      <Subcont>
                        <Photo src={item.image} />
                        <Name>{item.title}</Name>
                        <Special>{item.special}</Special>
                        <Tm>
                          <AccessTimeIcon
                            style={{
                              color: '#008080',
                              fontSize: '16px',
                            }}
                          />
                          <Time>{item.time}</Time>
                        </Tm>

                        <Ab>
                          <Amount>{item.Amount}</Amount>
                          <Btn>{item.btn}</Btn>
                        </Ab>
                      </Subcont>
                    </Cont>
                  </div>
                )
              })}
            </Content>
            <Tpc>
              <Tp onClick={showMore}>See More</Tp>
            </Tpc>
          </Bottom>
        </Total>
      </Wrapper>
    </Container>
  )
}

export default Doctor
