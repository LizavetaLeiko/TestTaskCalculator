import { KeypadFC } from '../keypad/KeypadFC'
import { HistoryFC } from '../history/HistoryFC'
import {CalcBox} from './calculatorStyles'

export const CalculatorFC = () =>{

  return(
    <CalcBox>
      <KeypadFC/>
      <HistoryFC/>
    </CalcBox>
  )
}