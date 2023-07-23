import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slides = [
    {
      titulo: 'Gatitos',
      img: 'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg',
      icon: 'paw-outline',
      description: 'hola soy la explicacion de slide,hola soy la explicacion de slide',
    },

    {
      titulo: 'Perritos',
      img: 'https://st2.depositphotos.com/3378121/5193/i/600/depositphotos_51933801-stock-photo-labrador-puppies-in-a-basket.jpg',
      icon: 'paw-outline',
      description: 'hola soy la explicacion de slide,hola soy la explicacion de slide',
    },

    {
      titulo: 'hamster',
      img: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRSM-bLdlw42S0tP6jHNppEhfDDU2nwKRL9UzKv7Mx6uOay9N4RsJLJmst9VIxAOckx',
      icon: 'paw-outline',
      description: 'hola soy la explicacion de slide,hola soy la explicacion de slide'
    },
    
    {
      titulo: 'Gatitos',
      img: 'https://s1.ppllstatics.com/lasprovincias/www/multimedia/202112/12/media/cortadas/gatos-kb2-U160232243326NVC-1248x770@Las%20Provincias.jpg',
      icon: 'paw-outline',
      description: 'hola soy la explicacion de slide,hola soy la explicacion de slide',
    }
  
  ]

  constructor(private router:Router, private storage:Storage) { }

  ngOnInit() {
  }
  final(){
    console.log("Estoy tratando de finalizar")
    this.storage.set("introShow", true)
    this.router.navigateByUrl("/menu/home");

  }

}
