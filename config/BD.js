import mongoose from "mongoose";


const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Movies');
        console.log('DB connected')
    } catch (error){ 
        console.log(error)
    }
}

export default connection;