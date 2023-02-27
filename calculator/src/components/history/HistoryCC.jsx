import { Component } from "react";
import { HisporyBox, HisporyTitle, HisporyList, HisporyItem, Button } from './historyStyles'


export class HistoryCC extends Component {

  render(){
    return(
      <HisporyBox>
      <HisporyTitle>History</HisporyTitle>
      <Button>Clear all</Button>
      <HisporyList>
        {/* {
          history.map(item =>{
            return <HisporyItem>{item}</HisporyItem>
          })
        } */}
      </HisporyList>
    </HisporyBox>
    )
  }
}