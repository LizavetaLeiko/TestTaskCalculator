import { Component } from "react";
import { HisporyBox, HisporyTitle, HisporyList, HisporyItem } from './historyStyles'


export class HistoryCC extends Component {
  constructor(props) {
    let history = ['history item 1', 'history item 2', 'history item 3', 'history item 4', 'history item 5', 'history item 6'];
    super(props)
  }

  render(){
    return(
      <HisporyBox>
      <HisporyTitle>History</HisporyTitle>
      <HisporyList>
        {
          this.history.map(item =>{
            return <HisporyItem>{item}</HisporyItem>
          })
        }
      </HisporyList>
    </HisporyBox>
    )
  }
}