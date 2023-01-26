import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

import {InitialState, initialState} from "./initialState";
import {Action, reducer} from "./reducer";


interface State extends InitialState {
  dispatch:  Dispatch<Action>
}

export const CalcContext = createContext<State>({...initialState, dispatch: () => {}});

export const useCalcContext = () => {
  return useContext(CalcContext);
}

export const CalcContextProvide = ({ children }: {children: ReactNode}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CalcContext.Provider value={{...state, dispatch}}>
      {children}
    </CalcContext.Provider>
  )
};
