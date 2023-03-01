import { ThemeSwitcher } from '../../components/themeSwitcher/ThemeSwitcher'
import { SettingsBox, SettingsTitle, Button } from './settingsStyles'
import { useDispatch } from "react-redux";
import { deleteAllAction } from '../../store/actions';

export const SettingsFC = () =>{

  const dispatch = useDispatch();

  const deleteHistory = () =>{
    dispatch(deleteAllAction())
  }

  return(
    <SettingsBox>
      <SettingsTitle>Settings</SettingsTitle>
      <ThemeSwitcher/>
      <Button onClick={()=>{deleteHistory()}}>Clear all history</Button>
    </SettingsBox>
  )
}