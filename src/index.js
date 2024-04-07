import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './jsx_test/Library';
import Clock from './element_test/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

setInterval(() =>{
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>,
  );
},1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
