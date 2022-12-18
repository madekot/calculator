import sty from './Switcher.module.scss'
import cn from 'classnames'
import {useTickCycle} from "./useTickCycle";
import {useEffect} from "react";

interface SwitcherProps {
  className: string
  numberSwitches: number
  getCurrentSwitch?: (currentSwitch: number) => void
}

const NUMBERS_SWITCHES_LENGTH_PX = 21
export const Switcher = ({className, numberSwitches, getCurrentSwitch}: SwitcherProps) => {
  const {tick, nextTik} = useTickCycle(0, numberSwitches)
  useEffect(() => {
    getCurrentSwitch?.( tick + 1)
  }, [tick]);

  const classList = cn(sty.switcher, className)

  return (
    <div className={classList}>
      <div className={sty.titleItems}>
        {[...Array(numberSwitches)].map((_, index) => {
          return (
            <span key={index} className={sty.title}>{index + 1}</span>
          )
        })}
      </div>
      <button className={sty.toggle} type={"button"} onClick={nextTik}>
        <span className={sty.toggleControl} style={{marginLeft: tick * NUMBERS_SWITCHES_LENGTH_PX}}></span>
      </button>
    </div>
  )
};
