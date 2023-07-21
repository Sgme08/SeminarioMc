import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
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
}