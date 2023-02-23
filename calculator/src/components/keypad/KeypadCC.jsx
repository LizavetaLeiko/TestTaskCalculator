import { Component } from 'react'
import { v4 as uuidV4 } from 'uuid'

import buttonsValues from '../../constants/buttonsValues'
import { KeypadButton, KeypadBox } from './keypadStyles'

export class KeypadCC extends Component {

  render(){
    return (
    <KeypadBox>
      {buttonsValues.map(item => (
        <KeypadButton
          key={uuidV4()}
          >
          {item}
        </KeypadButton>
      ))}
    </KeypadBox>
  )
  }
}