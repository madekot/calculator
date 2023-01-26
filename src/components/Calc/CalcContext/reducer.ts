import {Reducer} from "react";
import {initialState, InitialState} from "./initialState";
import {ControlData} from "../CalcButtonGroup";

export interface Action {
  type: ControlData['type']
  payload: {
    title: string
  }
}
export const reducer: Reducer<InitialState, Action> = (state: InitialState,action: Action) => {
  switch (action.type) {
    case 'addition':
      return {...state, operation: '+', display: '+'};
    case 'subtraction':
      return {...state, operation: '-', display: '-'};
    case 'multiplication':
      return {...state, operation: 'x', display: 'x'};
    case 'clear':
      return state
    case 'division':
      return {...state, operation: '/', display: '/'};
    case 'digit':
      return digit(state, action)
    case 'result':
      return result(state)
    case 'reset':
      return {...initialState}
    default:
      return state
  }
}

const digit = (state: InitialState, {payload}: Action) => {
  if (state.operandSecond === '' && state.operation === '') {
    return {
      ...state,
      display: state.display + payload.title,
      operandFirst: state.display + payload.title
    };
  } else if (state.operandFirst !== '' && state.operandSecond !== '' && state.result) {
    return {...state, operandSecond: payload.title, result: false, display: payload.title}
  } else {
    return {
      ...state,
      display: state.operandSecond + payload.title,
      operandSecond: state.operandSecond + payload.title
    }
  }
}

const result = (state: InitialState) => {
  if (state.operandSecond === '') {
    state.operandSecond = state.operandFirst
  }

  switch (state.operation) {
    case '+':
      return {
        ...state,
        operandFirst: Number(state.operandFirst) + Number(state.operandSecond),
        display: Number(state.operandFirst) + Number(state.operandSecond),
        result: true
      }
    case '-':
      return {
        ...state,
        operandFirst: Number(state.operandFirst) - Number(state.operandSecond),
        display: Number(state.operandFirst) - Number(state.operandSecond),
        result: true
      }
    case 'x':
      return {
        ...state,
        operandFirst: Number(state.operandFirst) * Number(state.operandSecond),
        display: Number(state.operandFirst) * Number(state.operandSecond),
        result: true
      }
    case '/':
      return {
        ...state,
        operandFirst: Number(state.operandFirst) / Number(state.operandSecond),
        display: Number(state.operandFirst) / Number(state.operandSecond),
        result: true
      }
    default:
      return state
  }
}