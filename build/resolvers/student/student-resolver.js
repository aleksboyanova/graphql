"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentResolver = void 0;
const type_graphql_1 = require("type-graphql");
const student_entity_1 = require("../../entities/student-entity");
const student_arguments_1 = require("./student-arguments");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const student_roles_1 = require("./student-roles");
let StudentResolver = class StudentResolver {
    async users() {
        return await student_entity_1.StudentModel.find({});
    }
    async user(_id) {
        return await student_entity_1.StudentModel.findById(_id);
    }
    async createStudent(data) {
        const studentData = { ...data, password: bcryptjs_1.default.hashSync(data.password, 10) };
        const newStudent = new student_entity_1.StudentModel(studentData);
        await newStudent.save();
        return newStudent;
    }
    async deleteStudent(_id) {
        return await student_entity_1.StudentModel.findByIdAndRemove(_id);
    }
    async editStudent(_id, data) {
        const studentData = data.password ? { ...data, password: bcryptjs_1.default.hashSync(data.password, 10) } : data;
        return await student_entity_1.StudentModel.findByIdAndUpdate(_id, studentData, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [student_entity_1.Student]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Query)(returns => student_entity_1.Student),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "user", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => student_entity_1.Student),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [student_arguments_1.CreateStudentInput]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "createStudent", null);
__decorate([
    (0, type_graphql_1.Authorized)([student_roles_1.StudentRoles.MASTER]),
    (0, type_graphql_1.Mutation)(returns => student_entity_1.Student),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "deleteStudent", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => student_entity_1.Student),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, student_arguments_1.EditStudentInput]),
    __metadata("design:returntype", Promise)
], StudentResolver.prototype, "editStudent", null);
StudentResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], StudentResolver);
exports.StudentResolver = StudentResolver;
