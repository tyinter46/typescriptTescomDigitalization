import mongoose from "mongoose";
import config from 'config'

const dbUri = config.get<string>('dbUri')

const connectToDb = async () => {
    try {
        await mongoose.connect(dbUri)
        console.log('connected to db')
    } catch (error: any) {
        console.error(error.message)
        process.exit(1)
    }
    

}

export default connectToDb