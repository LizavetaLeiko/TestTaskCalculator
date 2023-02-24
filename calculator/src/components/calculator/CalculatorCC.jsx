import { KeypadFC } from '../keypad/KeypadFC'
import { HistoryFC } from '../history/HistoryFC'
import {CalcBox} from './calculatorStyles'
import { Component } from 'react'

export class CalculatorFC extends Component{

  render(){
    return(
    <CalcBox>
      <KeypadFC/>
      <HistoryFC/>
    </CalcBox>
  )
  }
}