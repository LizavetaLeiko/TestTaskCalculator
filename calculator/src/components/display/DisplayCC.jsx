import { Component } from "react";
import { DisplayBox, DisplayContent } from "./displayStyles";
import { connect } from "react-redux";

class DisplayCC extends Component {
  render() {
    return (
      <DisplayBox>
        <DisplayContent
          style={
            this.props.content.expression.length >= 25
              ? { fontSize: "32px" }
              : { fontSize: "42px" }
          }
        >
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
