import sty from './CalcControlPanel.module.scss'
import cn from 'classnames'
import {mockItems} from "../../../mock/mockItems";
import {CalcButtonGroup} from "../CalcButtonGroup";
import React from "react";
import {Box} from "../../Box";

interface CalcControlPanelProps {
  className: string
}

export const CalcControlPanel = ({className}: CalcControlPanelProps) => {
  const calcControlPanel = cn(sty.calcControlPanel, className)
  return (
    <Box className={calcControlPanel} theme={'secondary'} paddingSize={'s'}>
      <CalcButtonGroup className={sty.buttonGroup} items={mockItems} />
    </Box>
  )
};
