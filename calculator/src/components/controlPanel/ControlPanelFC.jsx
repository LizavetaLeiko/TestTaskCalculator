import { ControlBox, ControlBtn } from './controlPanelStyles'
import { Context } from '@utils/Context';

export const ControlPanelFC =() =>{
  return(
    <Context.Consumer>
      {({historyIsOpen, toggleHistory}) => (
        <ControlBox>
          <ControlBtn onClick={toggleHistory}>{historyIsOpen ? 'ᐅ' : 'ᐊ'}</ControlBtn>
        </ControlBox>
      )}
    </Context.Consumer>
  )
}