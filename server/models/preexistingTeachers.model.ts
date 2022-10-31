import {
    getModelForClass,
    prop,
    } from "@typegoose/typegoose";


 export class TeachingStaff{
  @prop({required:true, unique:true})
  ogNum: string

  @prop({required:true})
  nameOfOfficer:string

  @prop({required:true})
  gradeLevel: string

  @prop({required:true})
  dateOfRetirement:Date

  @prop({required:true})
  dateOfFirstAppointment: Date

  @prop({required:true})
  dateOfBirth: Date
  }

  const PreexistingTeachingStaffModel = getModelForClass(TeachingStaff, {
    schemaOptions:{collection: 'teachingStaff' }
})
export default PreexistingTeachingStaffModel