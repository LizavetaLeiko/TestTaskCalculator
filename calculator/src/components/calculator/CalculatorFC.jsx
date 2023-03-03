import { KeypadFC } from '@components/keypad/KeypadFC'
import { HistoryFC } from '@components/history/HistoryFC'
import { DisplayFC } from '@components/display/DisplayFC'
import { ControlPanelFC } from '@components/controlPanel/ControlPanelFC' 
import { CalcBox, CalcContent } from './calculatorStyles'

export const CalculatorFC = () =>{

  return(
    <CalcBox>
      <CalcContent>
        <DisplayFC/>
        <KeypadFC/>
      </CalcContent>
      <ControlPanelFC/>
      <HistoryFC/>
    </CalcBox>
  )
}