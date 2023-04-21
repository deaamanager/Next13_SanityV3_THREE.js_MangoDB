import { MongoClient } from "mongodb";


const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_NAME = process.env.MONGODB_NAME;



// check the Mongoddb URI

if (!MONGODB_URI) {
  throw new Error(
    "Define the MONGODB_URI environment variable inside .env.local"
  );
}


// check the MongoDB database name

if (!MONGODB_NAME) {
    throw new Error(
        "Define the MONGODB_NAME environment variable inside .env.local"
    );
    }

    let cachedClient: any = null;
    let cachedDb: any = null;



    export async function connectToDatabase() {
        // check the cache
    if (cachedClient && cachedDb) {
        // load from cache
        return { client: cachedClient, db: cachedDb };
    }

    // set the connection options
    const options : any = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    

    // connect to cluster in mongodb atlas
    let client = new MongoClient(MONGODB_URI!, options);
    await client.connect();
    let db = client.db(MONGODB_NAME);


    // set the cache
    cachedClient = client;
    cachedDb = db;

    return { client : cachedClient,
        db: cachedDb };
        
}