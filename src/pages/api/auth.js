import { sign } from 'jsonwebtoken';
import { connectToDatabase } from '../../utils/db';

export default async (req, res) =>{
   if(req.method !== "POST"){
    return res.status(405).json({message: "Method not allowed"});
   }

   const {name, password} = req.body;
   const {db} = await connectToDatabase();

   const user = await db.collection(process.env.MONGO_DB).findOne({name});
   if(!user){
    return res.status(401).json({message: "Invalid email or password"});
   }

   const pwdMatch = await password === user.password;
   if(!pwdMatch){
    return res.status(401).json({message: "Invalid email or password"});
   }else{
    const userToken = {
        name:user.name,
    }
    const token = sign(userToken, process.env.JWT_KEY);
    res.status(200)
        .send({token, name:user.name, password:user.password});
   }
}