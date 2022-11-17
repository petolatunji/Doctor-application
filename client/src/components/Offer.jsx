import React from 'react'
import styled from 'styled-components'

import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import { mobile } from '../respone.js'

const Offer = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 100px;
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
  `
  const Tit = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
  `
  const Holder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
      padding: '20px',
      gap: '20px',
    })}
  `
  const Blood = styled.div`
    box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 25px -17px rgba(0, 0, 0, 0.75);
    border-radius: 25px 25px 25px 25px;
    -webkit-border-radius: 25px 25px 25px 25px;
    -moz-border-radius: 25px 25px 25px 25px;
    background-color: white;
    padding: 30px;
    width: 28%;
    ${mobile({
      width: '80%',
    })}
  `

  const Icon = styled.h3`
    color: #008080;
    padding: 5px;
    margin-bottom: 20px;
  `
  const Bp = styled.h3`
    color: #253d5b;
  `
  const Br = styled.p`
    color: #008080;
    margin-bottom: 20px;
    margin-top: 20px;
  `
  const Bs = styled.div`
    display: flex;
    gap: 10px;
  `

  const Per = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    font-size: 24px;
    margin-top: 10px;
  `
  return (
    <Container>
      <Wrapper>
        <Title>
          <Tit>What We Offer</Tit>
        </Title>
        <Holder>
          <Blood>
            <Icon>
              <MedicalServicesIcon
                style={{
                  color: '#008080',

                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>First Aid</Bp>
            <Br>
              We give emergency care to patients or victims with either serious
              o minor injury or even mild illness so as to preserve lives. This
              is done by trained personnels.
            </Br>

            <Per>Learn More</Per>
          </Blood>
          <Blood>
            <Icon>
              <LocalShippingIcon
                style={{
                  color: '#008080',

                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Emergence Unit</Bp>
            <Br>
              Our ambulance is fully equiped with medical equiqments and they
              are manned by specailist in thier fields. We are always available
              to respond to calls and treat patience.
            </Br>
            <Bs>
              <Per>Learn More</Per>
            </Bs>
          </Blood>

          <Blood>
            <Icon>
              <RecentActorsIcon
                style={{
                  color: '#008080',

                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Medical Checkup</Bp>
            <Br>
              This unit contains daily lesson plans, activities & exercise which
              helps to strenghten patients/trainees and build up minds both
              physically & mentally in their everyday life.
            </Br>
            <Bs>
              <Per>Learn More</Per>
            </Bs>
          </Blood>
        </Holder>
      </Wrapper>
    </Container>
  )
}

export default Offer
