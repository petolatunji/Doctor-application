import React from 'react'
import styled from 'styled-components'
import { mobile } from '../respone.js'

import FavoriteIcon from '@mui/icons-material/Favorite'
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import BloodtypeIcon from '@mui/icons-material/Bloodtype'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'

const Blood = () => {
  const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
  `
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1400px;
  `
  const Holder = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({
      flexDirection: 'column',
      gap: '20px',
      marginLeft: '30px',
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
    padding: 20px;
    width: 20%;
    ${mobile({
      width: '85%',
      padding: '10px',
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
    ${mobile({
      marginBottom: '10px',
      marginTop: '10px',
    })}
  `
  const Bs = styled.div`
    display: flex;
    gap: 10px;
  `
  const IconU = styled.h3`
    color: green;
  `
  const IconUr = styled.h3`
    color: red;
  `
  const Per = styled.p``
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Blood>
            <Icon>
              <VaccinesIcon
                style={{
                  color: '#008080',
                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Blood Pressure</Bp>
            <Br>100/7</Br>
            <Bs>
              <IconUr>
                <TrendingDownIcon />
              </IconUr>
              <Per>10% less than last month</Per>
            </Bs>
          </Blood>
          <Blood>
            <Icon>
              <FavoriteIcon
                style={{
                  color: '#008080',

                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Heart Rate</Bp>
            <Br>70 bpm </Br>
            <Bs>
              <IconU>
                <TrendingUpIcon />
              </IconU>
              <Per>15% greater than last week</Per>
            </Bs>
          </Blood>
          <Blood>
            <Icon>
              <MedicationLiquidIcon
                style={{
                  color: '#008080',
                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Glucose Level</Bp>
            <Br>60-90</Br>
            <Bs>
              <IconU>
                <TrendingUpIcon />
              </IconU>
              <Per>15% greater than last month</Per>
            </Bs>
          </Blood>
          <Blood>
            <Icon>
              <BloodtypeIcon
                style={{
                  color: '#008080',

                  fontSize: '60px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              />
            </Icon>
            <Bp>Blood Count</Bp>
            <Br>8.945msi</Br>
            <Bs>
              <IconUr>
                <TrendingDownIcon />
              </IconUr>
              <Per>8% less than last time</Per>
            </Bs>
          </Blood>
        </Holder>
      </Wrapper>
    </Container>
  )
}

export default Blood
