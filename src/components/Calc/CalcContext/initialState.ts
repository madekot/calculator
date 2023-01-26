export interface InitialState {
  operandFirst: string | number
  operandSecond: string | number
  result: boolean

  operation: string
  display: string | number
}

export const initialState: InitialState = {operandFirst: '', operandSecond: '', operation: '', result: false, display: ''};