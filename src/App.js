import ErrorBoundary from './ErrorBoundary';
import Countdown from './ticker';
import { CountProvider, Count, CountButton } from './count';
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
