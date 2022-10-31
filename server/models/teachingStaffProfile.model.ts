import {
    getModelForClass,
    modelOptions,
    prop,
    pre,
    DocumentType,
    Severity,
    index,
    Ref
  } from "@typegoose/typegoose";
import { TeachingStaff } from "./preexistingTeachers.model";
import TeachersUserModel, { TeacherUser } from "./teachingStaffUsers.models";
import { Enums } from "./enums";
import mongoose from "mongoose";
  
@modelOptions({
    schemaOptions:{
      timestamps: true
    },
    options:{
      allowMixed: Severity.ALLOW
    }
  })

 
  export class TeacherProfile {
  // @prop({required:true})
  // teacherName: string; 

  // @prop({required:true})
  // email: string 

  // @prop({required:true})
  // ogNumber: string 

  // @prop({required:true})
  // password: string 
 
  // @prop({required: true, default:()=> nanoid()})
  // verificationCode:string;

  // @prop()
  // passwordResetCode: string | null

  // @prop({default: false})
  // verified: boolean;
    @prop({required:true, ref: ()=> TeacherUser})
    teacherUser: Ref<TeacherUser>
    //
    @prop({ref:()=> TeachingStaff})
    teacherDetailsFromCaps: Ref<TeachingStaff> 
    
    //name
    @prop()
    remarks: string 

    @prop({required:true, enum: Enums.Gender})
    sex: Enums.Gender

    @prop({required:true})
    phoneNumber: string

    @prop({required:true})
    fileNumber: string 
    
    @prop({required: true})
    schoolOfPresentPosting:string

    @prop({required:true, enum: Enums.Gender})
    zone: Enums.Gender 

    @prop({required:true})
    division: Enums.Divisions 
    
    @prop({reqired: true, default: "Nigerian"})
    nationality: string  
    
    @prop({required:true})
    state: string
    
    @prop({required: true})
    localGovernmentOfOrigin: string
    
    @prop()
    ward: string
    
    @prop({required:true, enum: Enums.QUALIFICATIONS})
    qualification:[  {
        school: string,
        degree: Enums.QUALIFICATIONS,
        fieldOfStudy: String,
        yearOfDegree: Date,
                  }
        ]

    @prop({required:true, })
    additionalQualifications:[  {
            school: string,
            degree: string,
            fieldOfStudy: String,
            yearOfDegree: Date,
                      }
            ]
    

    

   
    // professional_status, 
    // subject_of_specialization, 
    // subject_taught, 
    // date_posted_to_present_school, 
    // cadre,
    // date_of_last_promotion, 
    // pfa,
    // pen_number, 
    // trc_number, 
    // passport
    
  }



