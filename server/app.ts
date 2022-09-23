import express from "express"
import connectToDb from "./utils/connectToDb"
import { getPreexistingTeachingStaff } from "./services/teachingStaff.services"



const app = express()
app.use(express.json())

connectToDb()
getPreexistingTeachingStaff()

const port : number = 3000 || process.env.PORT  
app.listen(port, ()=>{
console.log (`I am running on port ${port}`)

})