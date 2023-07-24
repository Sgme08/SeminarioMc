import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-songs-modal',
  templateUrl: './songs-modal.page.html',
  styleUrls: ['./songs-modal.page.scss'],
})
export class SongsModalPage implements OnInit {
  songs: any ;
  artist_name: any ;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {

    this.songs = this.navParams.data['songs'];
    this.artist_name = this.navParams.data['artist'];
    console.log(this.songs,"canciones");
    console.log(this.artist_name,"nombre de artista");

  }

  async final(){
    await this.modalController.dismiss();
  }

  async selectSong(song:any){
    await this.modalController.dismiss(song); 

  }

}
