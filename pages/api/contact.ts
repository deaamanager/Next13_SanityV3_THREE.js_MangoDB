import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from "@/lib/Mongo";

type Data = {
  message: string | undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try{
    let {db} = await connectToDatabase();
    let bodyObject = JSON.parse(req.body);
    let newPost = await db.collection('contact').insertOne(bodyObject);
   
    res.status(200).json({ message: 'your details submitted successfully'});
  }catch(err){
   res.status(400).json({ message: 'something went wrong'});
  }

  }

