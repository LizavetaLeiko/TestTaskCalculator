import styled from 'styled-components'

export const HistoryBox = styled.div`
  position: relative;
  max-height: 740px;
  height: 100%;
  width: 30%;
  padding: 30px 30px 30px 15px;
  text-align: center;
  overflow: hidden;
  @media (max-width: 1170px) {
    padding: 20px 20px 20px 10px;
    max-height: 880px;
    height: 100%;
    width: 40%
  }
  @media (max-width: 850px) {
    padding: 5px 20px;
    width: 100%;
    max-height: fit-content;
  }
`

export const HistoryListContainer = styled.div`
  overflow: scroll;
  position: relative;
  max-height: 600px;
  padding-bottom: 30px;
  @media (max-width: 1070px) {
    padding-bottom: 20px;
  }
`
export const HistoryList = styled.ul`
  height: fit-content;
  list-style: none;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 1170px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
`

export const HistoryItem = styled.li`
  list-style: none;
`
export const HistoryTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  @media (max-width: 1170px) {
    font-size: 28px;
  }
  @media (max-width: 600px) {
    font-size: 22px;
  }
  @media (max-width: 450px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
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
  @media (max-width: 1170px) {
    font-size: 14px;
  }
  @media (max-width: 450px) {
    font-size: 12px;
    padding: 5px;
    border-radius: 5px;
    margin: 0 auto 15px;
  }
`
