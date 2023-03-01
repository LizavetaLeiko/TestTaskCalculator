import { v4 as uuidV4 } from 'uuid'
import buttonsValues from '../../constants/buttonsValues'
import { KeypadBox } from './keypadStyles'
import { useDispatch } from 'react-redux';
import { addSymbolAction, deleteLastSymbolAction, deleteExpressionAction, getResultAction } from '../../store/actions';
import KeypadBtnFC from '../keypadBtn/KeypadBtnFC';

export const KeypadFC = () => {
  const dispatch = useDispatch();

  const setValue = (value) =>{
    switch (value){
      case 'CE' :
        dispatch(deleteLastSymbolAction(value))
        break;
      case 'C' :
        dispatch(deleteExpressionAction(value))
        break;
      case '=' :
        dispatch(getResultAction(value))
        break;
      default:
        dispatch(addSymbolAction(value))
    }
  }

  return (
    <KeypadBox>
      {buttonsValues.map(item => (
        <KeypadBtnFC
          setter={setValue}
          key={uuidV4()}
          btnValue={item}
          />
      ))}
    </KeypadBox>
  )
}