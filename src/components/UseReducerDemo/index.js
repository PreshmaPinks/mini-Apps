import React, {useReducer} from 'react';
import { Button } from 'antd';

const initialState=5
const reducer=(state, action)=>{
  if(action.type==='INCREEMENT')
  {
    return state+1
  }
  if(action.type==='DECREEMENT')
  {
    return state-1
  }
  return state
}

const ReducerDemo=()=> {

  const [state, dispatch]=useReducer(reducer, initialState)
  return (
    <div>
      <p>{state}</p>
      <Button onClick={()=>dispatch({type:'INCREEMENT'})}>Inc</Button>
      <Button onClick={()=>dispatch({type:'DECREEMENT'})}>Dec</Button>
    </div>
  )
}

export default ReducerDemo
