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
   
      img: 'https://i.pinimg.com/originals/10/9a/e9/109ae95604a560ba1d852eef1bf2139c.jpg'
      
    },

    {
      img: 'https://i.pinimg.com/1200x/fb/45/42/fb454267e2f7b0b4deb073119c1b7ae6.jpg'
    },

    {
      
      img: 'https://i.pinimg.com/1200x/55/7a/c2/557ac2732d43457f17ba47010e55a97b.jpg'
      
    },
    
    {
    
      img: 'https://e0.pxfuel.com/wallpapers/264/389/desktop-wallpaper-about-tumblr-in-phone-music.jpg'
   
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
