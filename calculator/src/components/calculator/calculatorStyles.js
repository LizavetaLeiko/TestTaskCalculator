import styled from "styled-components";


export const CalcBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin: 0 auto;
  background-color: ${({theme}) => theme.mane.backgroundColor};
  color: ${({theme}) => theme.mane.color};
  border: ${({theme}) => theme.mane.border};
  @media (max-width: 850px) {
    flex-direction: column;
  }
`
export const CalcContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  border-right: ${({theme}) => theme.mane.border};
`