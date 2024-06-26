import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Library from './jsx_test/Library';
import Clock from './element_test/Clock';
import CommentList from './component_test/CommentList';
import NotificationList from './state_test/NotificationList';
import Accommodate from './hook_test/Accommodate';
import ConfirmButton from './event_test/ConfirmButton';


const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx_test
// root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// );

// element_test
// setInterval(() =>{
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>,
//   );
// },1000);

//component_test
root.render(
  <React.StrictMode>
    <ConfirmButton />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
