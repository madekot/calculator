import sty from './Title.module.scss';
import cn from "classnames";

interface TitleProps {
  title?: string
  size: 'l' | 's'
  isUppercase?: boolean
  className?: string
}

export const Title = ({title, className, size, isUppercase}: TitleProps) => {
  if (!title) return null
  const classList = cn(
    sty.title,
    sty[`title--size--${size}`],
    {[sty[`title--isUppercase`]]: isUppercase},
    className
  )
  return (
    <p className={classList}>
      {title}
    </p>
  )
};
