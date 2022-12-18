import sty from './Box.module.scss'
import cn from 'classnames'
import {ReactNode} from "react";

interface BoxProps {
  className?: string
  children: ReactNode
  paddingSize: 's' | 'm'
  theme: 'secondary' | 'primary'
}

export const Box = ({className, children, paddingSize, theme}: BoxProps) => {
  const classList = cn(
    sty.box,
    sty[`box--padding-size--${paddingSize}`],
    sty[`box--theme--${theme}`],
    className
  )
  return (
    <div className={classList}>
      {children}
    </div>
  )
};
