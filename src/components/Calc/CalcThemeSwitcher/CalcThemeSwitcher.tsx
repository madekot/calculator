import sty from './CalcThemeSwitcher.module.scss';
import cn from 'classnames'
import {Title} from "../../Title";
import React from "react";
import {Switcher} from "../../Switcher";

interface CalcThemeSwitcherProps {
  title?: string
  className?: string
}

export const CalcThemeSwitcher = ({className, title}: CalcThemeSwitcherProps) => {
  const calcThemeSwitcher = cn(sty.calcThemeSwitcher, className)
  const setDataAtr = (currentSwitch: number) => (
    document.body.setAttribute('data-theme-calc', `${currentSwitch}`)
  )
  return (
    <div className={calcThemeSwitcher}>
      <Title className={sty.title} size={'s'} title={title} isUppercase/>
      <Switcher className={sty.switcher} numberSwitches={3} getCurrentSwitch={setDataAtr}/>
    </div>
  )
};