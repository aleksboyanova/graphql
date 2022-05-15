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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = exports.Student = void 0;
const type_graphql_1 = require("type-graphql");
const typegoose_1 = require("@typegoose/typegoose");
const mongodb_1 = require("mongodb");
const book_entity_1 = require("./book-entity");
const student_roles_1 = require("../resolvers/student/student-roles");
let Student = class Student {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", mongodb_1.ObjectId)
], Student.prototype, "_id", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Student.prototype, "firstName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Student.prototype, "lastName", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: true }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Student.prototype, "email", void 0);
__decorate([
    (0, typegoose_1.prop)({ required: false }),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], Student.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typegoose_1.prop)({ default: Date.now() }),
    __metadata("design:type", Number)
], Student.prototype, "lastLogin", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [book_entity_1.Book]),
    (0, typegoose_1.prop)({ default: [] }),
    __metadata("design:type", Array)
], Student.prototype, "books", void 0);
__decorate([
    (0, type_graphql_1.Authorized)([student_roles_1.StudentRoles.MASTER]),
    (0, type_graphql_1.Field)(type => [String]),
    (0, typegoose_1.prop)({ default: [student_roles_1.StudentRoles.STUDENT] }),
    __metadata("design:type", Array)
], Student.prototype, "roles", void 0);
Student = __decorate([
    (0, typegoose_1.modelOptions)({ options: { allowMixed: typegoose_1.Severity.ALLOW } }),
    (0, type_graphql_1.ObjectType)()
], Student);
exports.Student = Student;
exports.StudentModel = (0, typegoose_1.getModelForClass)(Student, { schemaOptions: { timestamps: true } });
