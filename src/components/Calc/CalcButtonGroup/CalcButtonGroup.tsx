import sty from './CalcButtonGroup.module.scss'
import cn from 'classnames'
import {Button, ButtonProps} from "../../Button";
import {useCalcContext} from "../CalcContext";


export interface ControlData {
  title: string
  type: 'digit' | 'clear' | 'multiplication' | 'division' | 'addition' | 'subtraction' | 'result' | 'dot' | 'reset',
}

export interface ControlProps extends ControlData, Pick<ButtonProps, 'theme' | 'size'> {
  sizeLength: 'default' | 'long'
}

interface CalcButtonGroupProps {
  items?: ControlProps[]
  className: string
}

export const CalcButtonGroup = ({className, items}: CalcButtonGroupProps) => {
  const {dispatch} = useCalcContext()
  if (!items?.length) return null
  const classList = cn(sty.calcButtonGroup, className)
  return (
    <div className={classList}>
      {items.map((item, index) => {
        return (
          <Button
            key={index}
            className={cn(
              sty.button,
              sty[`button--size--${item.sizeLength}`],
            )}
            {...item}
            onClick={() => dispatch({type: item.type, payload: {title: item.title}})}
          />
        )
      })}
    </div>
  )
};
