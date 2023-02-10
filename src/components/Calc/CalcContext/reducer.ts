import {Reducer} from "react";
import {initialState, InitialState} from "./initialState";
import {ControlData} from "../CalcButtonGroup";

// TODO:
// [] реальзовать функциона кнопки del, при нажатии из дисплея удаляется последний символ справа

// [] реальзовать функциона кнопки " . " появляется возможность считать дробные числа

// [] реальзовать функциона кнопки " = ", при повторном нажатии выполняется
// последняя операция см. как в калькуляторе в windows

// [] записывать выбранную тему в локал сторадж

// [] поправить верстку, тени от кнопок не должны плавно увеличиваться при загрузке приложения

// [] сделать адаптив для мобилки

// [] добавить окошко для истории операций, как в калькуляторе в windows


export interface Action {
  type: ControlData['type']
  payload: {
    title: string
  }
}

export const reducer: Reducer<InitialState, Action> = (state: InitialState, action: Action) => {
  switch (action.type) {
    case 'addition':
      if (state.operandSecond && state.operandFirst && state.operation) {
        return {
          ...state,
          operandFirst: calculate(state, state.operation),
          operandSecond: '',
          operation: '+',
          display: '+',
        }
      }
      return {...state, operation: '+', display: '+'};

    case 'subtraction':
      if (state.operandSecond && state.operandFirst && state.operation) {
        return {
          ...state,
          operandFirst: calculate(state, state.operation),
          operandSecond: '',
          operation: '-',
          display: '-',
        }
      }
      return {...state, operation: '-', display: '-'};

    case 'multiplication':
      if (state.operandSecond && state.operandFirst && state.operation) {
        return {
          ...state,
          operandFirst: calculate(state, state.operation),
          operandSecond: '',
          operation: 'x',
          display: 'x',
        }
      }
      return {...state, operation: 'x', display: 'x'};

    case 'division':
      if (state.operandSecond && state.operandFirst && state.operation) {
        return {
          ...state,
          operandFirst: calculate(state, state.operation),
          operandSecond: '',
          operation: '/',
          display: '/',
        }
      }
      return {...state, operation: '/', display: '/'};

    case 'clear':
      return state

    case 'digit':
      return digit(state, action)

    case 'result':
      return {
        ...state,
        operandFirst: calculate(state, state.operation),
        operandSecond: '',
        display: calculate(state, state.operation),
      }

    case 'reset':
      return {...initialState}

    case 'dot':
      return state

    default:
      return state
  }
}

const digit = (state: InitialState, {payload}: Action) => {
  if (
    state.operandFirst === 0 ||
    state.operandFirst === '0'
  ) {
    return {...state, operandFirst: payload.title, display: payload.title, operation: ''}
  }

  if (state.operandSecond === '' && state.operation === '') {
    return {
      ...state,
      display: state.display + payload.title,
      operandFirst: state.display + payload.title,
    };
  }

  return {
    ...state,
    display: state.operandSecond + payload.title,
    operandSecond: state.operandSecond + payload.title
  }
}

const calculate = (state: InitialState, operation: string) => {
  switch (operation) {
    case '+':
      return Number(state.operandFirst) + Number(state.operandSecond)
    case '-':
      return Number(state.operandFirst) - Number(state.operandSecond)
    case 'x':
      return Number(state.operandFirst) * Number(state.operandSecond)
    case '/':
      return Number(state.operandFirst) / Number(state.operandSecond)
  }
  console.error('Отсутсует case для switch, значение дефолтное')
  return 0
}