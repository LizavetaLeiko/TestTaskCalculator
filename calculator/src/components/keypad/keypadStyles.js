import styled from 'styled-components'

export const KeypadBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 30px;
  @media (max-width: 1170px) {
    padding: 15px;
  }
  @media (max-width: 600px) {
    padding-bottom: 5px;
  }
`
