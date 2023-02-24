import { KeypadFC } from '../keypad/KeypadFC'
import { HistoryFC } from '../history/HistoryFC'
import { DisplayFC } from '../display/DisplayFC'
import { CalcBox, CalcContent } from './calculatorStyles'


export const CalculatorFC = () =>{

  return(
    <CalcBox>
      <CalcContent>
        <DisplayFC/>
        <KeypadFC/>
      </CalcContent>
      <HistoryFC/>
    </CalcBox>
  )
}