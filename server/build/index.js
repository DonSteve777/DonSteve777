"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const myRoutes_1 = __importDefault(require("./routes/myRoutes"));
const morgan_1 = __importDefault(require("morgan")); //2 servidores
const cors_1 = __importDefault(require("cors")); //ver peticiones sobre la marcha
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json()); //para aceptar formatos json del cliente
    }
    routes() {
        this.app.use(myRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("servidor escuchando por el puerto ", this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
