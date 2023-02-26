import styled from 'styled-components'

export const SettingsBox = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px 30px;
  background-color: ${({theme}) => theme.mane.backgroundColor};
  color: ${({theme}) => theme.mane.color};
`
export const SettingsTitle = styled.h2`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: 600;
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
`
