import mongoose from 'mongoose';
import { DB_NAME } from '../../constants.js';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${ process.env.MONGODB_URL }/${DB_NAME}`)
        console.log('MongoDB connected to: ' + connection.connection.host);
        
     } catch (error) {
        console.log('MongoDB connection failed');
    }
}

export default connectDB;