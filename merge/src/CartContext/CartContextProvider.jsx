import React, { useReducer } from 'react'
import { createContext } from 'react';
import {reducer} from "./reducer"

export const CartContext= createContext();

const initState = [];
export const CartContextProvider = ({children}) => {
const [ state, dispatch] = useReducer(reducer,initState);


  return (
      <CartContext.provider value={{state , dispatch}}>
        {children}
      </CartContext.provider>
  );
  
}
