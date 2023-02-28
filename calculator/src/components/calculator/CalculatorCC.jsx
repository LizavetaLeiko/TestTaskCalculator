import KeypadCC from '../keypad/KeypadCC'
import HistoryCC from '../history/HistoryCC'
import DisplayCC from '../display/DisplayCC'
import ControlPanelCC from '../controlPanel/ControlPanelCC' 
import { ErrorBoundary } from '../errorBoundary/ErrorBoundary'
import {CalcBox, CalcContent} from './calculatorStyles'
import { Component } from 'react'


export class CalculatorCC extends Component{
  render(){
    return(
    <ErrorBoundary>
    <CalcBox>
      <CalcContent>
        <DisplayCC/>
        <KeypadCC/>
      </CalcContent>
      <ControlPanelCC/>
      <HistoryCC/>
    </CalcBox>
    </ErrorBoundary>
  )
  }
}