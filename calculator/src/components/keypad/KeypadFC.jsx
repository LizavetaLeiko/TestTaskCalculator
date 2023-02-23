import { v4 as uuidV4 } from 'uuid'

import buttonsValues from '../../constants/buttonsValues'
import { KeypadButton, KeypadBox } from './keypadStyles'

export const KeypadFC = () => {
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