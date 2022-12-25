"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var class_transformer_1 = require("class-transformer");
var create_user_dto_1 = require("./dto/create-user.dto");
var user_dto_1 = require("./dto/user.dto");
var user_entity_1 = require("./entities/user.entity");
var UsersService = /** @class */ (function () {
    function UsersService(userRepository) {
        this.userRepository = userRepository;
    }
    UsersService.prototype.create = function (createUserDto) {
        var user = new user_entity_1.User();
        Object.assign(user, (0, class_transformer_1.plainToClass)(create_user_dto_1.CreateUserDto, createUserDto, {
            excludeExtraneousValues: true
        }));
        return (0, class_transformer_1.plainToClass)(user_dto_1.UserDto, this.userRepository.save(user), {
            excludeExtraneousValues: true
        });
    };
    UsersService.prototype.findAll = function () {
        return (0, class_transformer_1.plainToClass)(user_dto_1.UserDto, this.userRepository.find(), {
            excludeExtraneousValues: true
        });
    };
    UsersService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " user");
    };
    UsersService.prototype.update = function (id, updateUserDto) {
        return "This action updates a #".concat(id, " user");
    };
    UsersService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " user");
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
