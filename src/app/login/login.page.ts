import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  validation_message = {
    email:[
      {type: "required" , message: "El email es obligatorio"},
      {type: "pattern" , message: "Debe poner un email valido"}
    ],
    Password:[
      {type: "required" , message: "El password es obligatorio"}, //message agg
      {type: "pattern" , message: "Debe poner un password valido"} //message agg
    ]
  }
  constructor(private formBuilder: FormBuilder){ 
    this.loginForm = this.formBuilder.group(
      {
        email: new FormControl( 
          "",
          Validators.compose(
            [
             Validators.required,
             Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+.[a-zA-Z0-9.-]+$"),
             Validators.maxLength(50) //validaror1
            ]
          )
        ),
        Password: new FormControl(
          "",
          Validators.compose(
            [
            Validators.required,
            Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$") //validador2
          ]
          )
        )
      }
    )
  }

  ngOnInit() {
  }

}
