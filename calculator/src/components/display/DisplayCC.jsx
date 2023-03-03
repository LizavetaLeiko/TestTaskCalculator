import { Component } from "react";
import { DisplayBox, DisplayContent } from "./displayStyles";
import { connect } from "react-redux";

class DisplayCC extends Component {
  render() {
    return (
      <DisplayBox>
        <DisplayContent>
          {this.props.content.result === ""
            ? this.props.content.expression
            : this.props.content.result}
        </DisplayContent>
      </DisplayBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    content: state,
  };
};

export default connect(mapStateToProps, null)(DisplayCC);
