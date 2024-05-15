import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  //Creamos las validaciones de los campos login
  formLogin = new FormGroup({
    dni: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(8)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(8), Validators.minLength(4)],)
  });

  constructor() { }

  ngOnInit() {
  }

}
