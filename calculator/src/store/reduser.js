import parse from "../utils/expressionParser"

const defaultstate = {
  expression: '',
  result: '',
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
    case 'deleteAll':
      return { ...state, expression: ''}
    case 'getResult':
      return { ...state, expression: parse(state.expression)}
    default:
      return state
  }
}
