import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import express from 'express';
import path from 'path';
import  favicon from 'serve-favicon'

var app = express();

const router = express.Router()



// app.use(favicon(path.join(__dirname,'favicon.ico')));

app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000);

console.log('server started on port: ', process.env.PORT || 3000);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
