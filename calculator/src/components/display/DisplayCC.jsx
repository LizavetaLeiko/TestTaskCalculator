import { Component } from 'react'
import {DisplayBox, DisplayContent} from './displayStyles'

export class DisplayCC extends Component {
  render(){
    return(
    <DisplayBox>
      <DisplayContent> 1 + 1</DisplayContent>
    </DisplayBox>
  )
  }
}