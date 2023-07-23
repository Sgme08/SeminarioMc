import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage: Storage) { }
  loginUser(credentials:any){

    return new Promise((accept, reject) => {
      if (
        credentials.email == "shirley@gmail.com" && 
        credentials.Password == "SHirley1234567alvarado"
      )
      {
        accept("Login exitoso")
      } else {
          reject("Verifique sus credenciales")
      }
    }
    )
  }

  registerUser(userData:any) {
    userData.Password = btoa(userData.Password);
    return this.storage.set("user", userData);

  }
}