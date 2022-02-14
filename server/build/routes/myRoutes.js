"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const myRoutesController_1 = require("../controllers/myRoutesController");
class MyRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/', myRoutesController_1.controller.create);
    }
}
const myRoutes = new MyRoutes();
exports.default = myRoutes.router;
