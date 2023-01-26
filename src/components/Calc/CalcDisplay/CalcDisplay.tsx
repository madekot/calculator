import sty from './CalcDisplay.module.scss'
import cn from 'classnames'
import React from "react";
import {Box} from "../../Box";
import {useCalcContext} from "../CalcContext";

interface CalcDisplayProps {
  className: string
}

export const CalcDisplay = ({className}: CalcDisplayProps) => {
  const {display} = useCalcContext()
  const calcDisplay = cn(sty.calcDisplay, className)
  return (
    <Box className={calcDisplay} paddingSize={'m'} theme={'primary'}>
      <p className={sty.value}>{display}</p>
    </Box>
  )
};
