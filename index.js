
import express from 'express';
import path from 'path';
// import  favicon from 'serve-favicon'

var app = express();

const router = express.Router()

// app.use(favicon(path.join(__dirname,'favicon.ico')));

router.get('/', function(req, res) {
  console.log(req)
  res.sendFile(path.join(__dirname, '/src/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.use(express.static(path.join(__dirname, '/public')));

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
