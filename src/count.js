import { createContext, useState, useContext } from 'react';

const CountContext = createContext();

export function CountProvider({ children }) {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function Count() {
  const { count } = useContext(CountContext);
  return <h3>{`Current count: ${count}`}</h3>;
}

export function CountButton() {
  const { count, setCount } = useContext(CountContext);
  return <button onClick={() => setCount(count + 1)}>Increment</button>;
}
