import { Component } from 'react';
import { KeypadButton } from './keypadBtnStyles';
import PropTypes from 'prop-types';

class KeypadBtnCC extends Component {
  
  render(){
    return (
      <KeypadButton
        onClick={() => {this.props.setter(this.props.btnValue)}}
      >
        {this.props.btnValue}
      </KeypadButton>
  )
  }
}

KeypadBtnCC.propTypes = {
  setter: PropTypes.func.isRequired,
  btnValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default KeypadBtnCC;

