import styled from 'styled-components'

export const SwitcherBox = styled.div`
  margin: 0 0 30px 0;
  @media (max-width: 600px) {
    margin: 0 0 20px 0;
  }
`
export const SwitcherTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
export const SwitcherSelect = styled.select`
  font-size: 20px;
  font-weight: 400;
  padding: 10px;
  border-radius: 10px;
  @media (max-width: 850px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
export const SwitcherOptions = styled.option`
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
`