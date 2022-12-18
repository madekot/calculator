import styles from './App.module.scss';
import {Calc} from "../Calc";

interface AppProps {
}

export const App = ({}: AppProps) => {
  return (
    <div className={styles.app}>
      <Calc/>
    </div>
  )
};
