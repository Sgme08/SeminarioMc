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
             Validators.maxLength(10) //validaror1
            ]
          )
        ),
        name: new FormControl( 
          "",
          Validators.compose(
            [
             Validators.required,
             Validators.maxLength(10) //validaror1
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
    console.log("volver")
  }
  registerUser(UserData:any) {
    console.log(UserData);
    this.authService.registerUser(UserData).then(() => {
      this.navCtrl.navigateBack("/login");
    })
  }

}
