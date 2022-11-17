import styled from 'styled-components'
import { mobile } from '../respone.js'

const Profile = () => {
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
  const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
    ${mobile({
      padding: '15px',
    })}
  `
  const Title = styled.h1``
  const Btn = styled.button`
    background-color: #008080;
    padding: 10px;
    border: none;

    color: white;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    ${mobile({
      marginRight: '15px',
    })}
  `
  const Middle = styled.div``
  const Bottom = styled.div``
  const Form = styled.div`
    display: flex;
    flex-direction: column;
    padding: 60px;
    background-color: white;
    width: 92%;
    gap: 20px;
    ${mobile({
      padding: '15px',
    })}
  `

  const Input = styled.input`
    padding: 10px;
    border: none;
    border: 2px solid #008080;
    width: 100%;
    margin-bottom: 20px;
    ${mobile({
      width: '80%',
    })}
  `
  const Radio = styled.div`
    display: flex;
  `

  const Div = styled.div``
  const Span = styled.p`
    margin-top: 10px;
    margin-bottom: 20px;
  `

  const Btns = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
  `
  const Button = styled.button`
    background-color: #008080;
    padding: 10px;
    border: ${(props) => (props.primary ? 'none' : 'solid')};
    color: white;
    background: ${(props) => (props.primary ? '#008080' : 'white')};
    color: ${(props) => (props.primary ? 'white' : '#008080')};
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
  `

  return (
    <Container>
      <Wrapper>
        <Total>
          <Top>
            <Title>My Profile</Title>
            <Btn>Edit</Btn>
          </Top>
          <Middle></Middle>
          <Bottom>
            <Form>
              <Title>Basic Details</Title>
              <Div>
                <Span>Full Name</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Date of Birth</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Gender</Span>
                <Radio>
                  <Input
                    type='radio'
                    placeholder='Enter a valid email address'
                  />
                  <Input
                    type='radio'
                    placeholder='Enter a valid email address'
                  />
                </Radio>
              </Div>

              <Title>Contact Details</Title>

              <Div>
                <Span>Email</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Mobile Number</Span>
                <Input type='text' placeholder='not set' />
              </Div>

              <Title>Personal Details</Title>

              <Div>
                <Span>Blood Group</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Blood Type</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Weight (kg)</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Div>
                <Span>Height (cm)</Span>
                <Input type='text' placeholder='not set' />
              </Div>
              <Btns>
                <Button primary>Save</Button>
                <Button>Cancel</Button>
              </Btns>
            </Form>
          </Bottom>
        </Total>
      </Wrapper>
    </Container>
  )
}

export default Profile
