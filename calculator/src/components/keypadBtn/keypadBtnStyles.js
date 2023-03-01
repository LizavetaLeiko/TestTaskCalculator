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
`