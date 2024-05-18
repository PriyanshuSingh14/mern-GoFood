const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/goFood';

const connectToMongo = async () => {
    try {
        await mongoose.connect(url);
        console.log("Connected to database..");
        
        const fetched_data = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
        // console.log(fetched_data);
    } catch (err) {
        console.log("An error occurred while connecting:", err);
    }
}

module.exports = connectToMongo;
