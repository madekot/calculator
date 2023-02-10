export interface InitialState {
  operandFirst: string | number
  operandSecond: string | number

  operation: string
  display: string | number
}

export const initialState: InitialState = {
  operandFirst: 0,
  operandSecond: '',
  operation: '',
  display: '0'
};