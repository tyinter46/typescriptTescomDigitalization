import {
  getModelForClass,
  modelOptions,
  prop,
  pre,
  DocumentType,
  Severity,
  index
} from "@typegoose/typegoose";
import argon2 from "argon2"
import { nanoid } from "nanoid";
 
@index({ogNumber:1})
@pre<TeacherUser>("save", async function (){
  if(!this.isModified("password")){
    return
  }
  const hash = await argon2.hash(this.password)
  this.password = hash
  return
})
@modelOptions({
  schemaOptions:{
    timestamps: true
  },
  options:{
    allowMixed: Severity.ALLOW
  }
})
export class TeacherUser {
 
  @prop({required:true})
  teacherName: string; 

  @prop({required:true})
  email: string 

  @prop({required:true})
  ogNumber: string 

  @prop({required:true})
  password: string 
 
  @prop({required: true, default:()=> nanoid()})
  verificationCode:string;

  @prop()
  passwordResetCode: string | null

  @prop({default: false})
  isverified: boolean;

  @prop()
  avatar: string

  @prop({default: Date.now})
  date: Date

 async validatePassword(this: DocumentType<TeacherUser>, teacherPassword: string) : Promise<boolean> {
    try {
      return await argon2.verify(this.password, teacherPassword)
    } catch (error) {
     console.error(error, "Could not validate password");
      return false;
    }

 }
}

const TeachersUserModel = getModelForClass(TeacherUser);
export default TeachersUserModel