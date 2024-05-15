import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {

  // Le pasamos parametros al formulario
  @Input() control!: FormControl; //Formulario
  @Input() type!: string; //Tipo de input
  @Input() label!: string; // nombre input
  @Input() autocomplete!: string; //autocompletarse
  @Input() icon!: string; // icono que acompaña al input


  constructor() { }
  ngOnInit() {
    //Vemos cuales son los input sean del tipo password y le decimos true
    if (this.type == "password") this.isPassword = true;
  }

  //Funtion para ver o esconder password
  isPassword!: boolean;
  hide: boolean = true;
  ShowOrHidePassword() {
    this.hide = !this.hide;
    if (this.hide) this.type = "password";
    else this.type = "text";
  }


}
