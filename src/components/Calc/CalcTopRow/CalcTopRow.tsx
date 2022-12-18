import sty from './CalcTopRow.module.scss'
import cn from 'classnames'
import {Title} from "../../Title";
import {CalcThemeSwitcher} from "../CalcThemeSwitcher";

interface CalcTopRowProps {
  className: string
}

export const CalcTopRow = ({className}: CalcTopRowProps) => {
  const calcTopRow = cn(sty.calcTopRow, className)
  return (
    <div className={calcTopRow}>
      <Title className={sty.title} size={'l'} title={'calc'} />
      <CalcThemeSwitcher className={sty.themeSwitcher} title={'theme'} />
    </div>
  )
};
