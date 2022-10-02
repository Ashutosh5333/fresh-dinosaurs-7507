import React, {useReducer } from "react";
import { reducer } from "./reducer";
import { createContext } from "react";

export const AppContext = createContext();

const initstate= {isAuth:false , token:null, isError:false, isLoading:false,data:[], isDataLoding:false }

const AuthContextProvider = ({children}) => {
  const [state ,dispatch] = useReducer(reducer, initstate);
  
  return <>
         <AppContext.Provider value={{state,dispatch  }}>
              {children}
         </AppContext.Provider>
  </>
};

export default AuthContextProvider;
