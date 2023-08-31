const express = require('express');
const router = express.Router();
const { getClient } = require('../db'); // Adjust the path as needed

router.post('/', async (req, res) => {
  const {name, item,Quantity,PhoneNumber,price} = req.body;

  // Validate the data (e.g., check for required fields)
  if (!name || !item ||!Quantity || !PhoneNumber || !price ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const collection = getClient().db('RegisterUser').collection('Order'); // Use the appropriate collection name

  try {
    const result = await collection.insertOne({
      name,
      item,
      PhoneNumber,
      Quantity,
      price,
    });

    // Respond with a success message and the inserted data
    res.json({
      message: 'Data stored successfully',
    //   insertedData: result.ops[0], // Assuming you want to send back the inserted document
    });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ message: 'Error storing data' });
  }
});

module.exports = router;
