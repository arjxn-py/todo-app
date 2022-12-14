import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// Added bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './custom.scss';
// Add our style
import './style/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

