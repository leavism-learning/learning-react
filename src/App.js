import React, { useState, useContext, createContext } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Countdown from './ticker';
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
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
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
