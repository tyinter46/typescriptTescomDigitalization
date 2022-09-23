import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
  pre,
  DocumentType,
  index,
} from "@typegoose/typegoose";
import { Date } from "mongoose";
 
@index({ogNumber:1})
@modelOptions({
  schemaOptions:{
    timestamps: true
  },
  options:{
    allowMixed: Severity.ALLOW
  }
})
export class TeachersUser {
@prop({ required: true })
nameOfOfficer: string;

@prop({required: true})
gradeLevel:string

@prop({required:true, unique:true})
ogNumber:Date

@prop({required:true})
dateOfFirstAppointment:Date

@prop({required:true})
dateOfRetirement: Date

}