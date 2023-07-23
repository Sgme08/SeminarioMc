import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  validation_messages = {

    name:[
      {type:"required", message:"El nombre es requerido"},
      {type:"minLength", message:"El nombre debe tener minimo 2 caracteres"}
    ],
    last_name:[
      {type:"required", message:"El Apellido es requerido"},
      {type:"minLength", message:"El Apellido debe tener minimo 2 caracteres"}
    ],


    email:[
      {type: "required" , message: "El email es obligatorio"},
      {type: "pattern" , message: "Debe poner un email valido"}
    ],
    Password:[
      {type: "required" , message: "El password es obligatorio"}, //message agg
      {type: "pattern" , message: "Debe poner un password valido"} //message agg
    ]
  }
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController
  ) { 
    this.registerForm = this.formBuilder.group(
      {
        last_name: new FormControl( 
          "",
          Validators.compose(
            [
             Validators.required,
             Validators.minLength(2) //validaror1
            ]
          )
        ),
        name: new FormControl( 
          "",
          Validators.compose(
            [
             Validators.required,
             Validators.minLength(2) //validaror1
            ]
          )
        ),
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
  goToLogin (){
    this.navCtrl.navigateBack("/login") //volver al login(punto1)
    console.log("volver")
  }
  registerUser(UserData:any) {
    console.log(UserData);
    this.authService.registerUser(UserData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }



}
