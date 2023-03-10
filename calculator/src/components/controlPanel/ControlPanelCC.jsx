import { Component } from 'react'
import { Context } from '@utils/Context';
import { ControlBox, ControlBtn } from './controlPanelStyles'

class ControlPanelCC extends Component{

  static contextType = Context
  
  render(){
    let {historyIsOpen, toggleHistory} = this.context;
    return(
      <ControlBox onClick={()=>toggleHistory()}>
        <ControlBtn>{historyIsOpen ? 'ᐅ' : 'ᐊ'}</ControlBtn>
      </ControlBox>
    )
  }
}

export default ControlPanelCC;
