import sty from './CalcDisplay.module.scss'
import cn from 'classnames'
import React from "react";
import {Box} from "../../Box";

interface CalcDisplayProps {
  value: number
  className: string
}

export const CalcDisplay = ({className, value}: CalcDisplayProps) => {
  const calcDisplay = cn(sty.calcDisplay, className)
  return (
    <Box className={calcDisplay} paddingSize={'m'} theme={'primary'}>
      <p className={sty.value}>{value}</p>
    </Box>
  )
};
