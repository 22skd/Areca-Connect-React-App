
const express = require('express');
const router = express.Router();
const { getClient } = require('../db'); // Adjust the path as needed

router.post('/', async (req, res) => {
  const { name, location, password } = req.body;

  // Validate the data (e.g., check for required fields)
  if (!name || !location || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const collection = getClient().db('RegisterUser').collection('User'); // Use the appropriate collection name

  try {
    const result = await collection.insertOne({ name, location, password });
    res.json({ message: 'User registered successfully', data: result.ops });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

module.exports = router;
