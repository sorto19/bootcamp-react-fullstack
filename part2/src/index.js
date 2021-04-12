
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const notes =[
  {
    id:1,
    content:'html is easy',
    date:'2020-03-4:30:31.0982',
    important: true,
    categories:['sports','dves']
  },
  {
    id:2,
    content:'css is easy',
    date:'2020-03-4:30:31.0982',
    important: false
  },
  {
    id:3,
    content:'javascript is difficult',
    date:'2020-03-4:30:31.0982',
    important: true
  },
]


const rootElement= document.getElementById("root");
  ReactDOM.render(
    <App notes={notes} />,
    rootElement
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

