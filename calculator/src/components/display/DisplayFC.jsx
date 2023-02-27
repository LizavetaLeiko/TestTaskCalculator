import { useSelector } from 'react-redux';
import {DisplayBox, DisplayContent} from './displayStyles';

export const DisplayFC = () =>{

  const expression = useSelector( state => state.expression)

  return(
    <DisplayBox>
      <DisplayContent style={ expression.length >= 25 ? {fontSize: '32px'} : {fontSize: '42px'}}>{expression}</DisplayContent>
    </DisplayBox>
  )
}