import React, { useState } from 'react';
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

const IncrementButton = (props) => {
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

function App() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    setCount(count + 1);
  }

  return (
    <>
      <div>
        <Card icon={<MyIcon />}>
          <p>Hello world</p>
        </Card>
      </div>
      <ListOfAnimals />
      <h2>{count}</h2>
      <IncrementButton onClick={handleClick}>Increment</IncrementButton>
    </>
  );
}

export default App;
