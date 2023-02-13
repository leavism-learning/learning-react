import React, { useState, useEffect, useContext, createContext } from 'react';
import './App.css';

function Card(props) {
  return (
    <section>
      <h2>{props.icon} Title</h2>
      {props.children}
    </section>
  );
}

function MyIcon() {
  return <i>🔥</i>;
}

const CustomButton = (props) => {
  return (
    <button onClick={props.onClick} type='button'>
      {props.children}
    </button>
  );
};

const data = [
  { id: 1, name: 'Fido 🐕' },
  { id: 2, name: 'Snowball 🐈' },
  { id: 3, name: 'Murph 🐈‍⬛' },
  { id: 4, name: 'Zelda 🐈' },
];

function ListOfAnimals() {
  return (
    <ul>
      {data.map((animal) => {
        return <li key={animal.id}>{animal.name}</li>;
      })}
    </ul>
  );
}

const Countdown = ({ hour, minute, second }) => {
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
};

const CountContext = createContext();

function CountProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function Count() {
  const { count } = useContext(CountContext);
  return <h3>{`Current count: ${count}`}</h3>;
}

function CountButton() {
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount((count) => setCount(count + 1))}>
      Increment
    </button>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    // Change to true to enable error
    this.state = { hasError: true };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(err, errInfo) {
    console.log('something went horribly wrong', err, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='error-boundary'>
          <h3>Fallback UI</h3>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <>
      <div>
        <Card icon={<MyIcon />}>
          <p>Hello world</p>
        </Card>
      </div>
      <ListOfAnimals />
      <div>
        <Countdown hour={1} minute={45} second={0} />
      </div>
      <CountProvider>
        <Count />
        <CountButton />
      </CountProvider>
      <div>
        <h3>Outside the error boundary</h3>
        <ErrorBoundary>
          <h3>Inside the error boundary</h3>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
