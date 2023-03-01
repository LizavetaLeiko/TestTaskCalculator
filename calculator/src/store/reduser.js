import parse from "../utils/expressionParser"
import { getHistory, setHistory, clearHistory } from "../utils/localStorageHelper"

const defaultstate = {
  expression: '',
  result: '',
  history: [],
}

export const reduser = ( state = defaultstate, action)=>{
  switch(action.type){
    case 'addSymbol':
      if (state.expression.length >= 33){
        return {...state}
      } else{
        return { ...state, expression: state.expression + action.payload}
      }
    case 'deleteLastSymbol':
      return { ...state, expression: state.expression.slice(0, -1)}
    case 'deleteExpression':
      return { ...state, expression: '', result: ''}
    case 'getResult':
      let result = parse(state.expression);
      setHistory(state.expression, result)
      return { ...state, result: result, history: getHistory()}
    case 'getHistory':
      return { ...state, history: getHistory()}
    case 'deleteAll':
      return { ...state, expression: '', result: '', history: clearHistory()}
    case 'deleteHistory':
      return { ...state, history: clearHistory()}
    default:
      return state
  }
}
