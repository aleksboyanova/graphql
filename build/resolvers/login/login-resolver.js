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
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const student_entity_1 = require("../../entities/student-entity");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login_arguments_1 = require("./login-arguments");
const apollo_server_core_1 = require("apollo-server-core");
const token_1 = require("./token");
let LoginResolver = class LoginResolver {
    async currentStudent(ctx) {
        if (!ctx.student) {
            throw new apollo_server_core_1.AuthenticationError('student_not_authenticated');
        }
        return await student_entity_1.StudentModel.findById(ctx.student._id);
    }
    async login({ email, password }) {
        const student = await student_entity_1.StudentModel.findOne({ email });
        if (!student) {
            throw new apollo_server_core_1.UserInputError('Wrong email or password');
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, student.password);
        if (!isPasswordValid) {
            throw new apollo_server_core_1.UserInputError('Wrong email or password');
        }
        student.lastLogin = Date.now();
        await student.save();
        return (0, token_1.getToken)(student._id, student.roles);
    }
};
__decorate([
    (0, type_graphql_1.Query)(returns => student_entity_1.Student),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "currentStudent", null);
__decorate([
    (0, type_graphql_1.Mutation)(returns => String),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_arguments_1.LoginArguments]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "login", null);
LoginResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LoginResolver);
exports.LoginResolver = LoginResolver;
