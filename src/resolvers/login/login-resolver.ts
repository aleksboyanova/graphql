import { Resolver, Query, Mutation, Args, Ctx } from "type-graphql";
import { Student, StudentModel } from "../../entities/student-entity";
import bcryptjs from "bcryptjs"
import { LoginArguments } from "./login-arguments";
import { UserInputError, AuthenticationError } from "apollo-server-core";
import { getToken } from "./token";
import { Context } from "./context";
@Resolver()
export class LoginResolver {

  @Query(returns => Student)
  async currentStudent(@Ctx() ctx: Context):Promise<Student> {
    if(!ctx.student) {
        throw new AuthenticationError('student_not_authenticated');
    }
    return await StudentModel.findById(ctx.student._id)
  }


  @Mutation(returns => String)
  async login(@Args(){email, password}: LoginArguments) {
    
    const student = await StudentModel.findOne({email})
    if(!student) {
        throw new UserInputError('Wrong email or password');
    }
    const isPasswordValid = await bcryptjs.compare(password, student.password)

    if(!isPasswordValid) {
        throw new UserInputError('Wrong email or password');
    }

    student.lastLogin = Date.now()
    await student.save();
    return getToken(student._id, student.roles)
  }

}