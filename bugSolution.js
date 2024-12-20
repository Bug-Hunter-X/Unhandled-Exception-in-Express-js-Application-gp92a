const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  try {
    const data = someFunctionThatMightThrowAnError();
    res.send(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Something went wrong');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someFunctionThatMightThrowAnError() {
  // Simulate an error
  throw new Error('Something went wrong');
}
