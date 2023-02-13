import { useEffect, useState } from 'react';

export default function Countdown({ hour, minute, second }) {
  const [over, setOver] = useState(false);
  const [paused, setPaused] = useState(true);
  const [[h, m, s], setTime] = useState([hour, minute, second]);

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) setTime([h - 1, 59, 59]);
    else if (s === 0) setTime([h, m - 1, 59]);
    else setTime([h, m, s - 1]);
  };

  const handlePause = () => setPaused(!paused);
  const format = (val) => val.toString().padStart(2, '0');
  const handleReset = () => {
    setTime([hour, minute, second]);
    setPaused(true);
    setOver(false);
  };

  useEffect(() => {
    let ticker = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(ticker);
    };
  });

  return (
    <>
      <h3 className='countdown'>{`${format(h)}:${format(m)}:${format(s)}`}</h3>
      <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
