import { Request } from "express";
import { Student } from "../../entities/student-entity";

export interface Context {
    req: Request,
    student: Student,
    ip: any,
    location: any,
    md: any,
}