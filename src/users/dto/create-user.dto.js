"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var user_dto_1 = require("./user.dto");
var CreateUserDto = /** @class */ (function (_super) {
    __extends(CreateUserDto, _super);
    function CreateUserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)({ message: 'Không được rỗng' })
    ], CreateUserDto.prototype, "password");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)({ message: 'Không được rỗng' })
    ], CreateUserDto.prototype, "firstName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)({ message: 'Không được rỗng' })
    ], CreateUserDto.prototype, "lastName");
    return CreateUserDto;
}(user_dto_1.UserDto));
exports.CreateUserDto = CreateUserDto;
