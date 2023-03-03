import { Link } from 'react-router-dom';
import Timer from './Timer/Timer';
import TimerWithDisable from './TimerWithDisable/TimerWithDisable';

export const App = () => {
  return (
    <>
      <Timer />
      <TimerWithDisable />
    </>
  );
};
export default App;
