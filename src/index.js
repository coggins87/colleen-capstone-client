import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApiProvider } from './context/ApiContext'
import './index.css';
import App from './components/App/App';


ReactDOM.render(
<BrowserRouter>
<ApiProvider>
  <App />
  </ApiProvider>
  </BrowserRouter>, document.getElementById('root'));

