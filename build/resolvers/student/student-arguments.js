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
exports.EditStudentInput = exports.CreateStudentInput = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const book_arguments_1 = require("../book/book-arguments");
let CreateStudentInput = class CreateStudentInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], CreateStudentInput.prototype, "password", void 0);
CreateStudentInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateStudentInput);
exports.CreateStudentInput = CreateStudentInput;
let EditStudentInput = class EditStudentInput {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditStudentInput.prototype, "firstName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], EditStudentInput.prototype, "lastName", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], EditStudentInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    (0, class_validator_1.MinLength)(6),
    __metadata("design:type", String)
], EditStudentInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => [book_arguments_1.BookInput]),
    __metadata("design:type", Array)
], EditStudentInput.prototype, "books", void 0);
EditStudentInput = __decorate([
    (0, type_graphql_1.InputType)()
], EditStudentInput);
exports.EditStudentInput = EditStudentInput;
