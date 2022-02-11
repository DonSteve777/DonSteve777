import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Register} from '../models/Register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URI = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  saveRegister(reg: Register): Observable<any>{
    return this.http.post('http://localhost:3000', reg);
  }


}
