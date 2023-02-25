import { ThemeSwitcher } from '../../components/themeSwitcher/ThemeSwitcher'
import { SettingsBox, SettingsTitle, Button } from './settingsStyles'

export const SettingsFC = () =>{
  return(
    <SettingsBox>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeSwitcher/>
      <Button>Clear all history</Button>
    </SettingsBox>
  )
}