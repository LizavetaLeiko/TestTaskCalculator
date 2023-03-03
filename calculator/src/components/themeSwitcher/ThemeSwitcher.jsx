import { SwitcherSelect, SwitcherOptions, SwitcherTitle, SwitcherBox } from './themeSwitcherStyles';
import { Context } from '@utils/Context';

export const ThemeSwitcher = () =>{
  return(
    <Context.Consumer>
      {({theme, toggleTheme}) => (
        <SwitcherBox>
        <SwitcherTitle>Theme</SwitcherTitle>
        <SwitcherSelect onChange={toggleTheme} defaultValue={theme.type}>
          <SwitcherOptions value="light">Light Theme</SwitcherOptions>
          <SwitcherOptions value="dark">Dark Theme</SwitcherOptions>
        </SwitcherSelect>
      </SwitcherBox>
      )}
    </Context.Consumer>
  )
}