import { ThemeSwitcher } from '@components/themeSwitcher/ThemeSwitcher'
import { SettingsBox, SettingsTitle, Button } from './settingsStyles'
import { useDispatch } from "react-redux";
import { deleteAllAction } from '@store/actions';

export const SettingsFC = () =>{

  const dispatch = useDispatch();

  return(
    <SettingsBox>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeSwitcher/>
      <Button onClick={()=>dispatch(deleteAllAction())}>Clear all history</Button>
    </SettingsBox>
  )
}