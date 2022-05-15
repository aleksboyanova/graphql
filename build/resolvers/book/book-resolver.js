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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const book_entity_1 = require("../../entities/book-entity");
const student_roles_1 = require("../student/student-roles");
const book_arguments_1 = require("./book-arguments");
let BookResolver = class BookResolver {
    async books() {
        return await book_entity_1.BookModel.find({});
    }
    async book(_id) {
        return await book_entity_1.BookModel.findById(_id);
    }
    async createBook(data) {
        const newStudent = new book_entity_1.BookModel(data);
        await newStudent.save();
        return newStudent;
    }
    async deleteBook(_id) {
        return await book_entity_1.BookModel.findByIdAndRemove(_id);
    }
    async editBook(_id, data) {
        return await book_entity_1.BookModel.findByIdAndUpdate(_id, data, { new: true });
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => [book_entity_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    (0, type_graphql_1.Query)(returns => book_entity_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => book_entity_1.Book),
    __param(0, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [book_arguments_1.BaseBookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
__decorate([
    (0, type_graphql_1.Authorized)([student_roles_1.StudentRoles.ADMIN, student_roles_1.StudentRoles.MASTER]),
    (0, type_graphql_1.Mutation)(returns => book_entity_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "deleteBook", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => book_entity_1.Book),
    __param(0, (0, type_graphql_1.Arg)("_id")),
    __param(1, (0, type_graphql_1.Arg)("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, book_arguments_1.BookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "editBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BookResolver);
exports.BookResolver = BookResolver;
