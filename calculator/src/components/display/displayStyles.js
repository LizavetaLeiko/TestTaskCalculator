import styled from "styled-components";

export const DisplayBox = styled.div`
  padding: 35px;
  width: 100%;
  border-bottom: ${({theme}) => theme.mane.border};
  @media (max-width: 1170px) {
    padding: 20px;
  }
  @media (max-width: 450px) {
    padding: 10px 20px;
  }
`
export const DisplayContent = styled.p`
  font-size: 42px;
  font-weight: 600;
  text-align: right;
  min-height: 50px;
  @media (max-width: 1170px) {
    font-size: 32px;
    min-height: 40px;
  }
  @media (max-width: 450px) {
    font-size: 24px;
    min-height: 34px;
  }
`
