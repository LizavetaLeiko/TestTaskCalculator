import { Component } from "react";
import { DisplayBox, DisplayContent } from "./displayStyles";
import { connect } from "react-redux";

class DisplayCC extends Component {
  render() {
    return (
      <DisplayBox>
        <DisplayContent>{this.props.expression}</DisplayContent>
      </DisplayBox>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expression: state.expression
  }
};

export default connect(mapStateToProps, null)(DisplayCC);
