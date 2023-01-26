import sty from './Calc.module.scss';
import {CalcTopRow} from "./CalcTopRow";
import {CalcDisplay} from "./CalcDisplay";
import {CalcControlPanel} from "./CalcControlPanel";
import {CalcContextProvide} from "./CalcContext";

interface CalcProps {
}

export const Calc = ({}: CalcProps) => {
  return (
    <CalcContextProvide>
      <div className={sty.calc} id={'calc-theme'}>
        <CalcTopRow className={sty.header} />
        <CalcDisplay className={sty.display} />
        <CalcControlPanel className={sty.controlPanel} />
      </div>
    </CalcContextProvide>
  )
};
