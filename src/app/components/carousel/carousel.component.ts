import { Component, OnInit, Input } from "@angular/core";
import { Movie } from "../../interfaces/interfaces";
import { ModalController } from '@ionic/angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  
  @Input() movie: Movie[] = [];

  previewConf = {
    slidesPerView: 1.3,
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
