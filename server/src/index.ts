import express, {Application} from 'express';
import myRoutes from './routes/myRoutes';
import myroute from './routes/myRoutes';
import morgan from 'morgan';    //2 servidores
import cors from 'cors';    //ver peticiones sobre la marcha

class Server{

    public app : Application
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());   //para aceptar formatos json del cliente
    }

    routes(): void{
        this.app.use(myRoutes);
    }

    start(): void{
        this.app.listen(this.app.get('port'), () =>{
            console.log("servidor escuchando por el puerto ", this.app.get('port')  );
        });
    }
}

const server = new Server();
server.start();