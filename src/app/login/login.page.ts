import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

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
errorMessages: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
    ){ 

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

  loginUser(credentials: any){
    console.log(credentials);
    this.authService.loginUser(credentials).then(res => {
      this.errorMessages = "";
      this.storage.set ("isUserLoggedIn", true);
      this.navCtrl.navigateForward("/home");

    }).catch(err =>{
      this.errorMessages = err;
      console.log(this.errorMessages);
    })

  }
  goToRegister(){
    this.navCtrl.navigateForward("/register")
  }

 

}
