import {Request, Response} from 'express';
import pool from '../database'; 

class MyRoutesController{
    
    public async create(req: Request, res: Response): Promise<void>{

        console.log('desde server llega el body: \n' + req.body.name);
        console.log(req.body.birthdate);
        await pool.query('INSERT INTO register set ?',  req.body);
        res.json( {name: req.body.name });
    }
}//

export const controller = new MyRoutesController();