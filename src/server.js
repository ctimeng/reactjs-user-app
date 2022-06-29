const express = require('express');
const cors = require('cors')
const app = express();
const LocalStorage = require('node-localstorage').LocalStorage,
  localStorage = new LocalStorage('./scratch');
const store = require("store2");

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.use('/role', (req, res) => {
  res.send([
    {
      'id':1,
      'name':'Admin'
    },
    {
      'id':2,
      'name':'User'
    }
  ]);
});

app.use('/permission', (req, res) => {
  res.send([
    {
      'id':1,
      'name':'Full'
    },
    {
      'id':2,
      'name':'Read'
    },
    {
      'id':2,
      'name':'Write'
    }
  ]);
});

app.listen(8080, () => {
  //localStorage.setItem('myFirstKey', 'myFirstValue')
  //console.log(localStorage.getItem('myFirstKey'))
  store.set('user', { name:'Marcus' })
  console.log(store.get('user'))
  console.log('API is running on http://localhost:8080')
});
/*node server.js*/