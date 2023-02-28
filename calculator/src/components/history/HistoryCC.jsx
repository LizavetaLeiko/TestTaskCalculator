import { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
} from "./historyStyles";
import { getHistoryAction } from "../../store/actions";

class HistoryCC extends Component {

  componentDidMount(){
    this.props.getHistory();
  }
  
  render() {
    return (
      <HistoryBox>
        <HistoryTitle>History</HistoryTitle>
        <Button>Clear all</Button>
        <HistoryList>
        {this.props.content.history.map((item) => {
          return (
            <HistoryItem key={uuidV4()}>
              {item.expression}={item.result}
            </HistoryItem>
          );
        })}
        </HistoryList>
      </HistoryBox>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    content: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: (value) => dispatch(getHistoryAction(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryCC);
