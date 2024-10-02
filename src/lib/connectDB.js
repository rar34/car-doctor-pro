import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDb = async () => {
    if (db) return db;

    try {
        const uri = process.env.MONGO_DB_URI;
        // Create a MongoClient with a MongoClientOptions object to set the Stable API version
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        db = client.db('car-doctor-pro');
        return db;
    } catch (error) {
        console.log(error)
    }
}