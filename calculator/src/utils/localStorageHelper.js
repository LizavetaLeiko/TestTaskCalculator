export const setHistory = (expression, result) =>{
  let arr = getHistory();
  let newArr;
  if (!arr){
    localStorage.setItem('history', JSON.stringify([{expression, result}]));
  } else {
    newArr = [...arr, {expression, result}]
    localStorage.setItem('history', JSON.stringify(newArr));
  }
  return newArr
}

export const getHistory = () =>{
  let res = localStorage.getItem('history')
  if(res !== undefined){
    return JSON.parse(res);
  }
}

export const clearHistory = () =>{
  localStorage.removeItem('history')
  return []
}