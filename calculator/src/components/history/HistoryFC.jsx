import { HisporyBox, HisporyTitle, HisporyList, HisporyItem } from './historyStyles'

export const HistoryFC = () =>{


  let history = ['history item 1', 'history item 2', 'history item 3', 'history item 4', 'history item 5', 'history item 6']
  return(
    <HisporyBox>
      <HisporyTitle>History</HisporyTitle>
      <HisporyList>
        {
          history.map(item =>{
            return <HisporyItem>{item}</HisporyItem>
          })
        }
      </HisporyList>
    </HisporyBox>
  )
}
