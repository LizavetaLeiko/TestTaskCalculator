import { Component } from "react";
import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
} from "./historyStyles";

export class HistoryCC extends Component {
  render() {
    return (
      <HistoryBox>
        <HistoryTitle>History</HistoryTitle>
        <Button>Clear all</Button>
        <HistoryList>
          {/* {
          history.map(item =>{
            return <HistoryItem>{item}</HistoryItem>
          })
        } */}
        </HistoryList>
      </HistoryBox>
    );
  }
}
