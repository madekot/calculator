import sty from './Calc.module.scss';
import {CalcTopRow} from "./CalcTopRow";
import {CalcDisplay} from "./CalcDisplay";
import {CalcControlPanel} from "./CalcControlPanel";

interface CalcProps {
}

export const Calc = ({}: CalcProps) => {
  return (
    <div className={sty.calc} id={'calc-theme'}>
      <CalcTopRow className={sty.header} />
      <CalcDisplay className={sty.display} value={391239.981} />
      <CalcControlPanel className={sty.controlPanel} />
    </div>
  )
};
