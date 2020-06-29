import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {

  @Input() movie: Movie[] = [];

  previewConf = {
    slidesPerView: 3.2,
    freeMode: true,
  };

  constructor(private modalCtrl: ModalController ) {

  }

  ngOnInit() {

  }

   async getDetail(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailComponent,
      componentProps: {
        id: id,
      },
    });

    modal.present();
  }
}