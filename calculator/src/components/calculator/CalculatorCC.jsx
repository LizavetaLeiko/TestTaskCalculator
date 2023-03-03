import KeypadCC from '@components/keypad/KeypadCC'
import HistoryCC from '@components/history/HistoryCC'
import DisplayCC from '@components/display/DisplayCC'
import ControlPanelCC from '@components/controlPanel/ControlPanelCC' 
import {CalcBox, CalcContent} from './calculatorStyles'
import { Component } from 'react'


export class CalculatorCC extends Component{
  render(){
    return(
    <CalcBox>
      <CalcContent>
        <DisplayCC/>
        <KeypadCC/>
      </CalcContent>
      <ControlPanelCC/>
      <HistoryCC/>
    </CalcBox>
  )
  }
}