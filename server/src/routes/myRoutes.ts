import {Router} from 'express';
import {controller} from '../controllers/myRoutesController';

class MyRoutes{

    public router : Router = Router();

    constructor(){
        this.config();

    }

    config(): void {
        this.router.post('/', controller.create);
    }
    
}

const myRoutes = new MyRoutes();
export default myRoutes.router;