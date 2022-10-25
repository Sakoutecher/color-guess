import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Guess from './components/Guess';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <div className='container'>
      <Guess />
    </div>
);

