import { KeypadButton} from './keypadBtnStyles'
import PropTypes from 'prop-types';

const KeypadBtnFC = ({setter, btnKey, btnValue}) => {

  return (
        <KeypadButton
          onClick={() => {setter(btnValue)}}
          >
          {btnValue}
        </KeypadButton>
  )
}

KeypadBtnFC.propTypes = {
  setter: PropTypes.func.isRequired,
  btnValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}

export default KeypadBtnFC;