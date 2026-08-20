import { MongoClient } from "mongodb";

async function connectToDatabase(){
    const client = MongoClient.connect(`mongodb+srv://antoninaparulava_db_user:2p8618Bef50E8Ow8@cluster0.zztfbxa.mongodb.net/auth-demo?retryWrites=true&w=majority`);

    return client;
}