import { v4 as uuidV4 } from 'uuid'
import buttonsValues from '../../constants/buttonsValues'
import { KeypadButton, KeypadBox } from './keypadStyles'
import { useDispatch } from 'react-redux';
import { addSymbolAction, deleteLastSymbolAction, deleteAllAction } from '../../store/actions';

export const KeypadFC = () => {
  const dispatch = useDispatch();

  const setValue = (value) =>{
    switch (value){
      case 'CE' :
        dispatch(deleteLastSymbolAction(value))
        break;
      case 'C' :
        dispatch(deleteAllAction(value))
        break;
      default:
        dispatch(addSymbolAction(value))
    }
  }

  return (
    <KeypadBox>
      {buttonsValues.map(item => (
        <KeypadButton
          onClick={() => {setValue(item)}}
          key={uuidV4()}
          >
          {item}
        </KeypadButton>
      ))}
    </KeypadBox>
  )
}