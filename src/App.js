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

const LoadingButton = (props) => {
  return (
    <button onClick={props.onClick} type='button'>
      {props.loading ? <div className='loader' /> : props.label}
    </button>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div>
        <Card icon={<MyIcon />}>
          <p>Hello world</p>
        </Card>
      </div>
      <LoadingButton
        label='Press me'
        loading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      />
    </>
  );
}

export default App;
