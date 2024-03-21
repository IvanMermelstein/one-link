import { NextApiRequest, NextApiResponse } from 'next';
import {  MongoClient, ObjectId } from 'mongodb';
    
    export default async function handler(req:NextApiRequest, res:NextApiResponse) {
      if (req.method === 'GET') { 
        const client = new MongoClient(process.env.MONGODB_URI as string);
        try {
          await client.connect();

          const { id } = req.query;
          if (!id || typeof id !== 'string') {
            return res.status(400).json({ error: 'Id is required' });
          }

          const db = client.db('one-link');
          const nid = new ObjectId(id);
          const user = await db.collection('user').findOne({ _id: nid });

          res.status(200).json(user);
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: 'Unable to connect to database' });
        } finally {
          await client.close();
        }
      } else {
        res.status(405).json({ error: 'Unsupported HTTP method' });
      }
    }
