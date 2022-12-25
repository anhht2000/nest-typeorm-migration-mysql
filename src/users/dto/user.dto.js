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
exports.UserDto = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var dto_common_1 = require("../../common/dto.common");
var UserDto = /** @class */ (function (_super) {
    __extends(UserDto, _super);
    function UserDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_transformer_1.Expose)()
    ], UserDto.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)({ message: 'Không được rỗng' }),
        (0, class_validator_1.IsInt)({ message: 'Phải là số' }),
        (0, class_validator_1.Min)(0, { message: 'Số phải lớn hơn 0' }),
        (0, class_validator_1.Max)(10, { message: 'Số phải nhỏ hơn 10' })
    ], UserDto.prototype, "age");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var obj = _a.obj;
            return obj.firstName + ' ' + obj.lastName;
        })
    ], UserDto.prototype, "fullName");
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_validator_1.IsNotEmpty)({ message: 'Không được rỗng' }),
        (0, class_validator_1.IsInt)({ message: 'Phải là số' })
    ], UserDto.prototype, "heigth");
    return UserDto;
}(dto_common_1.CommonDto));
exports.UserDto = UserDto;
