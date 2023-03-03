import { v4 as uuidV4 } from 'uuid'
import buttonsValues from '@constants/buttonsValues'
import { KeypadBox } from './keypadStyles'
import { useDispatch } from 'react-redux';
import { addSymbolAction, deleteLastSymbolAction, deleteExpressionAction, getResultAction } from '@store/actions';
import KeypadBtnFC from '@components/keypadBtn/KeypadBtnFC';

export const KeypadFC = () => {
  const dispatch = useDispatch();

  const setValue = (value) =>{
    switch (value){
      case 'CE' :
        dispatch(deleteLastSymbolAction())
        break;
      case 'C' :
        dispatch(deleteExpressionAction())
        break;
      case '=' :
        dispatch(getResultAction())
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