"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TtModule = void 0;
const common_1 = require("@nestjs/common");
const tt_controller_1 = require("./tt.controller");
const tt_service_1 = require("./tt.service");
let TtModule = class TtModule {
};
TtModule = __decorate([
    (0, common_1.Module)({
        controllers: [tt_controller_1.TtController],
        providers: [tt_service_1.TtService]
    })
], TtModule);
exports.TtModule = TtModule;
//# sourceMappingURL=tt.module.js.map