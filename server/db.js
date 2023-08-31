const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb://127.0.0.1:27017/RegisterUser';
const client = new MongoClient(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
function isDatabaseConnected() {
    return client.isConnected();
  }

module.exports = {
  connectToDatabase,
  isDatabaseConnected,
  getClient: () => client,
};
