import { Student } from "../../entities/student-entity"

declare module "express" { 
  export interface Request {
    student: Student
  }
}