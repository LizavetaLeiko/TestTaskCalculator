import styled from 'styled-components'

export const SettingsBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 30px;
  background-color: ${({theme}) => theme.mane.backgroundColor};
  color: ${({theme}) => theme.mane.color};
  @media (max-width: 8500px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    padding: 30px 20px;
  }
  @media (max-width: 450px) {
    padding: 20px;
  }
`
export const SettingsTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
  @media (max-width: 850px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
`
export const Button = styled.button`
  max-width: 200px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;
  text-align: center;
  border: 1px solid #000;
  background-color: ${({theme}) => theme.btn.backgroundColor};
  font-size: 18px;
  font-weight: 400;
  color: ${({theme}) => theme.btn.color};
  &:hover {
    background-color: ${({theme}) => theme.btn.hoverColor};
  }
  @media (max-width: 850px) {
    font-size: 14px;
    max-width: 150px;
    padding: 10px;
  }
`
