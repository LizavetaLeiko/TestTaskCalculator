import { Component } from "react";
import { HisporyBox, HisporyTitle, HisporyList, HisporyItem } from './historyStyles'


export class HistoryCC extends Component {

  render(){
    return(
      <HisporyBox>
      <HisporyTitle>History</HisporyTitle>
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