import { MongoClient } from 'mongodb';
require('dotenv').config();

const uri = process.env.MONGO_URI;

export async function connectToDatabase() {
  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db();
  
  return { client, db };
}