import styled from 'styled-components'

export const HisporyBox = styled.div`
  width: 30%;
  height: 100%;
  padding: 30px 30px 30px 15px;
  text-align: center;
`
export const HisporyList = styled.ul`
  list-style: none;
  font-size: 20px;
  font-weight: 400;
`

export const HisporyItem = styled.li`
  list-style: none;
`
export const HisporyTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`
export const Button = styled.button`
  max-width: 150px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px;
  text-align: center;
  border: 1px solid #000;
  background-color: ${({theme}) => theme.btn.backgroundColor};
  font-size: 16px;
  font-weight: 400;
  margin: 0 auto 20px;
  color: ${({theme}) => theme.btn.color};
  &:hover {
    background-color: ${({theme}) => theme.btn.hoverColor};
  }
`
