import styled from 'styled-components'

export const HistoryBox = styled.div`
  position: relative;
  width: 40%;
  max-height: 740px;
  height: 100%;
  padding: 30px 30px 30px 15px;
  text-align: center;
  overflow: hidden;
`

export const HistoryListContainer = styled.div`
  overflow: scroll;
  position: relative;
  max-height: 600px;
  padding-bottom: 30px;
`
export const HistoryList = styled.ul`
  height: fit-content;
  list-style: none;
  font-size: 20px;
  font-weight: 400;
`

export const HistoryItem = styled.li`
  list-style: none;
`
export const HistoryTitle = styled.h2`
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
