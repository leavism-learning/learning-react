import logo from './logo.svg';
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

function App() {
  return (
    <div>
      <Card icon={<MyIcon />}>
        <p>Hello world</p>
      </Card>
    </div>
  );
}

export default App;
