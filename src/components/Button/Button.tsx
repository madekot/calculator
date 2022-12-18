import sty from './Button.module.scss'
import cn from 'classnames'

export interface ButtonProps {
  className: string
  title?: string
  size: 'l' | 'm'
  theme: 'primary' | 'secondary' | 'accent'
}

export const Button = ({className, title, size, theme}: ButtonProps) => {
  const button = cn(
    sty.button,
    sty[`button--size--${size}`],
    sty[`button--theme--${theme}`],
    className
  )
  return (
    <button className={button} type={"button"}>
      {title}
    </button>
  )
};
