// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const { connectToDatabase, isDatabaseConnected } = require('./db'); // Adjust the path as needed

app.use(cors());
app.use(express.json());

connectToDatabase();

app.get('/check-connection', (req, res) => {
  if (isDatabaseConnected()) {
    res.json({ message: 'Database is connected' });
  } else {
    res.json({ message: 'Database is not connected' });
  }
});

const registerUserRoute = require('./routes/registerUser'); // Adjust the path as needed
app.use('/registerUser', registerUserRoute);

const CompregisterRoute = require('./routes/CompanyReg'); // Adjust the path as needed
app.use('/Compregister', CompregisterRoute);
const CompOrdRoute = require('./routes/CompanyOrder'); // Adjust the path as needed
app.use('/CompOrder', CompOrdRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

