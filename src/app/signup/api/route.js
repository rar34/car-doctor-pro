import { connectDb } from "@/lib/connectDB";
const bcrypt = require('bcrypt');

export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDb();
        const userCollection = db.collection("users");
        const exists = await userCollection.findOne({ email: newUser.email });
        if (exists) {
            return Response.json({ message: "User already exists" }, { status: 304 });
        }

        const hashedPassword = bcrypt.hashSync(newUser.password, 14);
        const resp = await userCollection.insertOne({...newUser, password: hashedPassword});
        // const resp = await userCollection.insertOne(newUser);
        return Response.json({ message: "User created successfully" }, { status: 200 });


    } catch (error) {
        return Response.json({ message: "Something went wrong", error }, { status: 500 });
    }
}