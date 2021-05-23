import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.json({
    msg: 'This is working fine',
  });
});

const port = 5000;

app.listen(port, '0.0.0.0', () => {
  console.log('Ser running on port ' + port);
});

/*
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"*/
