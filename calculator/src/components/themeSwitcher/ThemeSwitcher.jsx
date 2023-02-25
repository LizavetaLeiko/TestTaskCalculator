import { SwitcherSelect, SwitcherOptions, SwitcherTitle, SwitcherBox } from './themeSwitcherStyles'

export const ThemeSwitcher = () =>{
  return(
    <SwitcherBox>
      <SwitcherTitle>Theme</SwitcherTitle>
      <SwitcherSelect>
        <SwitcherOptions>Light Theme</SwitcherOptions>
        <SwitcherOptions>Dark Theme</SwitcherOptions>
      </SwitcherSelect>
    </SwitcherBox>
  )
}