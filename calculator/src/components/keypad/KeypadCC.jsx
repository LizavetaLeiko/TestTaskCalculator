import { Component } from 'react'
import { v4 as uuidV4 } from 'uuid'
import buttonsValues from '../../constants/buttonsValues'
import { KeypadButton, KeypadBox } from './keypadStyles'
import { addSymbolAction, deleteLastSymbolAction, deleteAllAction } from '../../store/actions'
import { connect } from "react-redux";

class KeypadCC extends Component {
  setValue = (value) => {
    switch (value) {
      case 'CE' :
        this.props.deleteLastSymbol(value)
        break;
      case 'C' :
        this.props.deleteAll(value)
        break;
      default:
        this.props.addSymbol(value)
    }
  }

  render(){
    return (
    <KeypadBox>
      {buttonsValues.map(item => (
        <KeypadButton
          onClick={() => {this.setValue(item)}}
          key={uuidV4()}
          >
          {item}
        </KeypadButton>
      ))}
    </KeypadBox>
  )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSymbol: (value) => dispatch(addSymbolAction(value)),
    deleteLastSymbol: (value) => dispatch(deleteLastSymbolAction(value)),
    deleteAll: (value) => dispatch(deleteAllAction(value)),
  }
}

export default connect(null, mapDispatchToProps)(KeypadCC);

