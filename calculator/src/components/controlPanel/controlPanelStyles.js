import styled from 'styled-components'

export const ControlBox = styled.div`
  align-self: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ControlBtn = styled.button`
  color: ${({theme}) => theme.mane.color};
  padding: 300px 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`