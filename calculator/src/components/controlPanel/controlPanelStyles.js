import styled from 'styled-components'

export const ControlBox = styled.div`
  align-self: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 5px;
  @media (max-width: 850px) {
    width: 100%;
    height: fit-content;
    padding: 5px 50px;
  }
`
export const ControlBtn = styled.button`
  color: ${({theme}) => theme.mane.color};
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  @media (max-width: 850px) {
    transform: rotate(-90deg);
  }
`