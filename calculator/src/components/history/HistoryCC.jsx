import { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import {
  HistoryBox,
  HistoryTitle,
  HistoryList,
  HistoryItem,
  Button,
  HistoryListContainer
} from "./historyStyles";
import { getHistoryAction, deleteAllAction } from "../../store/actions";
import { Context } from "../../utils/Context";

class HistoryCC extends Component {

  static contextType = Context

  componentDidMount(){
    this.props.getHistory();
  }

  deleteAll = () =>{
    this.props.deleteAll()
  }

  render() {
    let { historyIsOpen } = this.context;
    return (
      <HistoryBox style={historyIsOpen ? {display: "block"} : {display: "none"}}>
        <HistoryTitle>History</HistoryTitle>
        <Button onClick={() => this.deleteAll()}>Clear all</Button>
        <HistoryListContainer>
        <HistoryList>
        {this.props.history && this.props.history.reverse().map((item) => {
          return (
            <HistoryItem key={uuidV4()}>
              {item.expression}={item.result}
            </HistoryItem>
          );
        })}
        </HistoryList>
        </HistoryListContainer>
      </HistoryBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    history: state.history,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getHistory: () => dispatch(getHistoryAction()),
    deleteAll: () => dispatch(deleteAllAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryCC);
