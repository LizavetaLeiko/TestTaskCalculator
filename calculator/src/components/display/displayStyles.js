import styled from "styled-components";

export const DisplayBox = styled.div`
  padding: 35px;
  width: 100%;
  border-bottom: ${({theme}) => theme.mane.border};
`
export const DisplayContent = styled.p`
  font-size: 42px;
  font-weight: 600;
  text-align: right;
  min-height: 50px;
`
