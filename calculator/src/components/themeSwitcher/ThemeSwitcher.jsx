import { SwitcherSelect, SwitcherOptions, SwitcherTitle, SwitcherBox } from './themeSwitcherStyles';
import { ThemeContext } from '../../utils/themeContext';

export const ThemeSwitcher = () =>{
  return(
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <SwitcherBox>
        <SwitcherTitle>Theme</SwitcherTitle>
        <SwitcherSelect onChange={toggleTheme} defaultValue={theme.type}>
          <SwitcherOptions value="light">Light Theme</SwitcherOptions>
          <SwitcherOptions value="dark">Dark Theme</SwitcherOptions>
        </SwitcherSelect>
      </SwitcherBox>
      )}
    </ThemeContext.Consumer>
  )
}