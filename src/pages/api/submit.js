import { MongoClient } from 'mongodb';
import { connectToDatabase } from '../../utils/db';

export default async function handler(req, res) {
  const { name, dob, gender, matric, year, dept, cgpa, } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const client = await MongoClient.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db();

    const result = await db.collection('iubrecords').insertOne({
        name, dob, gender, matric, year, dept, cgpa,
    });

    console.log(`Result : ${result}`)

    client.close();
    return res.status(201).json({ message: 'Student added successfully!' });
    
  } catch (error) {
    //console.error(error)
    console.log('failed to add');
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong.' });
    
  }
}