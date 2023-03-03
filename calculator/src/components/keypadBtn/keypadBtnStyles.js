import styled from 'styled-components'

export const KeypadButton = styled.button`
  width: 120px;
  height: 120px;
  border-radius: 10px;
  cursor: pointer;
  margin: 10px;
  padding: 5px;
  text-align: center;
  border: 1px solid #000;
  background-color: ${({theme}) => theme.btn.backgroundColor};
  font-size: 32px;
  font-weight: 600;
  color: ${({theme}) => theme.btn.color};
  &:hover {
    background-color: ${({theme}) => theme.btn.hoverColor};
  }
  @media (max-width: 1170px) {
    width: 100px;
    height: 100px;
    font-size: 26px;
    margin: 5px;
  }
  @media (max-width: 600px) {
    width: 75px;
    height: 75px;
    font-size: 22px;
    margin: 5px;
  }
  @media (max-width: 500px) {
    width: 65px;
    height: 80px;
    font-size: 20px;
    margin: 5px;
  }
  @media (max-width: 430px) {
    width: 55px;
    height: 70px;
    font-size: 18px;
    margin: 5px;
  }
  @media (max-width: 360px) {
    width: 45px;
    height: 60px;
    font-size: 18px;
    margin: 5px;
  }
`