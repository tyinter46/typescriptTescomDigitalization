import mongoose, { connection } from "mongoose";
import * as argon2 from 'argon2'
import config from 'config'
import {MongoClient} from 'mongodb'

const url =config.get<string>("dbUri") 
const client = new MongoClient(url)
const dbName = "teachingStaffFromCaps"

export const getPreexistingTeachingStaff = async ()=>{
try {
    await client.connect()

    const db = client.db(dbName)
    const collection = db.collection('teachingStaff')
    const existingTeachingStaff =  collection.find({}).toArray((err,data)=>{
        if (err) console.log(err.message)
       // collection.drop()
       console.log(data) 
    })
    return existingTeachingStaff
     
//    
//     let allTeachingStaff =  connection.db.collection("teachingStaff")
//     // await mongoose.connect(dbUri).Collection("teachingStaff")
//  console.log(allTeachingStaff)
    
} catch (error:any) {
    console.error(error.message)
}
    

}
