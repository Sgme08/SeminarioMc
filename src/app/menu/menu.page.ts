import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage:Storage
    ) { }

  ngOnInit() {
  }


  closeMenu(){
    this.menu.close(); 
  }

  logout(){
    this.navCtrl.navigateRoot('/login'); 
    this.storage.set("isUserLoggedIn", false) //1punto
  }

  goIntro(){
    this.navCtrl.navigateRoot('/intro'); //punto 2
  }

  goToSettings(){
    this.navCtrl.navigateForward('/menu/settings');
    this.menu.close();
    
  }
  goToHome(){
    this.navCtrl.navigateRoot("/menu/home");
    this.menu.close();
  }

}
