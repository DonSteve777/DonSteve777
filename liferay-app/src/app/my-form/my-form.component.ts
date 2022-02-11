import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import {RegisterService} from '../services/register.service';
import {Register} from '../models/Register';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  pipe = new DatePipe('en-US');
  siteKey: string;

  myForm = this.formBuilder.group({
    name: new FormControl('', [
      Validators.required]),
    surname: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    recaptcha: ['', Validators.required]
  })

  reg: Register = {
    name: '',
    surname: '',
    birthdate: new Date(),
    email: '',
    created_at: new Date()
  }



  constructor(private formBuilder: FormBuilder, private service: RegisterService, private cdr: ChangeDetectorRef) {
    this.siteKey = '6LeErGkeAAAAAGIMPiapLibQi-QpaWZIRExh4QlS';
   }



  onSubmit():void {

    if (this.myForm.valid){
      let json = JSON.stringify(this.myForm.value);
      localStorage.setItem(this.myForm.get('name')?.value , json);
      this.reg.name = this.myForm.get('name')?.value;
      this.reg.surname = this.myForm.get('surname')?.value;
      this.reg.email = this.myForm.get('email')?.value;

      let dateWithPipe = this.myForm.get('birthdate')?.value;
      dateWithPipe = this.pipe.transform(dateWithPipe, 'yyyy/MM/dd');
      this.myForm.controls['birthdate'].setValue(dateWithPipe);
      this.reg.birthdate =  this.myForm.get('birthdate')?.value;

      dateWithPipe = this.pipe.transform(new Date(), 'yyyy/MM/dd hh:mm:ss');
      this.myForm.controls['birthdate'].setValue(dateWithPipe);
      this.reg.created_at =  this.myForm.get('birthdate')?.value;
      this.myForm.reset();

      Object.keys(this.myForm.controls).forEach(key => {
        this.myForm.controls[key].setErrors(null)
      });

      window.location.reload();

      this.service.saveRegister(this.reg).subscribe({
        next: (v) => console.log("xxxxxxxxxxxxx" + v),//console.log(v),
        error: (e) => alert("error"),//console.error(e),
        complete: () => alert("complete"),//console.info('complete')
      });
    }
    else{

        alert("formulario invalido");
    }
  }

  get name() { return this.myForm.get('name') as FormControl }


  ngOnInit(): void {
  }

}


