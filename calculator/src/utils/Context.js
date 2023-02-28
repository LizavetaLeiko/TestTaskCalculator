import { createContext } from 'react'
import { themes } from '../constants/themeContextValues'

export const Context = createContext({
  theme: themes.light,
  toggleTheme: () => {},
  historyIsOpen: true,
  toggleHistory: () => {},
})