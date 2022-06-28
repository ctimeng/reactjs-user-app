const express = require('express');
const cors = require('cors')
const app = express();

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

app.listen(8080, () => console.log('API is running on http://localhost:8080'));
/*node server.js*/