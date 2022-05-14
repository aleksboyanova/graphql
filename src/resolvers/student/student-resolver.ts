import { Resolver, Query, Mutation, Arg, Authorized } from "type-graphql";
import { Student, StudentModel } from "../../entities/student-entity";
import { CreateStudentInput, EditStudentInput } from "./student-arguments";
import bcryptjs from "bcryptjs"
import { StudentRoles } from "./student-roles";

@Resolver()
export class StudentResolver {

  @Query(returns => [Student])
  async users():Promise<Student[]> {
    return await StudentModel.find({})
  }

  @Query(returns => Student)
  async user(@Arg("_id") _id: string):Promise<Student> {
    return await StudentModel.findById(_id);
  }

  @Mutation(returns => Student)
  async createStudent(@Arg("data") data: CreateStudentInput):Promise<Student> {
    const studentData = {...data, password: bcryptjs.hashSync(data.password, 10)}  
    const newStudent = new StudentModel(studentData);
    await newStudent.save();
    return newStudent
  }

  @Authorized([StudentRoles.MASTER])
  @Mutation(returns => Student)
  async deleteStudent(@Arg("_id") _id: string):Promise<Student> {
    return await StudentModel.findByIdAndRemove(_id);
  }

  @Mutation(returns => Student)
  async editStudent(@Arg("_id") _id: string, @Arg("data") data: EditStudentInput):Promise<Student> {
    const studentData = data.password ? {...data, password: bcryptjs.hashSync(data.password, 10)} : data
    return await StudentModel.findByIdAndUpdate(_id, studentData, {new: true});
  }

}