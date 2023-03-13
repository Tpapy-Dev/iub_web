import { connectToDatabase } from '../../utils/db';

export default async (req, res) =>{
   
   try{
    const {db} = await connectToDatabase();

    const data = await db.collection('iubrecords').find().toArray();

    res.status(200).json(data);
   }
   catch(err){
    console.error(err);
    res.status(500).json({message: 'Something went wrong'});
   }
   
}