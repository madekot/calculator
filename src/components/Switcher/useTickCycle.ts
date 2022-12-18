import {useState} from "react";

const useTickCycle = (startTik = 0, endTik = 3) => {
  const [tick, setTick] = useState(startTik)

  const nextTik = () => {
    if (tick === endTik - 1) {
      setTick(0)
      return
    }
    setTick((prevState) => prevState + 1)
  }
  return {tick, nextTik}
}

export {useTickCycle}