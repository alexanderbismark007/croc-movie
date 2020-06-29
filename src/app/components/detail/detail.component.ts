import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { DetailMovie, CreditsMovie } from "../../interfaces/interfaces";
import { ModalController, NavController } from "@ionic/angular";
import { DatabaseService } from "../../services/database.service";
import { TranslateappService } from "../../services/translateapp.service";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  @Input() id;
  limit = 100;
  detailMovie: DetailMovie;
  creditsMovie: CreditsMovie;
  selectedLanguage: string;

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private localData: DatabaseService,
    private translateConfigService: TranslateappService
  ) {
    this.selectedLanguage = this.translateConfigService.getLanguage();
  }

  ngOnInit() {
    this.moviesService
      .getDetailMovie(this.id, this.selectedLanguage)
      .subscribe((resp) => {
        //console.log(resp);
        this.detailMovie = resp;
      });
    this.moviesService.getCreditsMovie(this.id).subscribe((resp) => {
      //console.log(resp);
      this.creditsMovie = resp;
    });
  }

  toBack() {
    this.modalCtrl.dismiss();
  }

  toBuy() {    
    console.log('localdb', this.detailMovie);
    this.localData.saveDetailMovie(this.detailMovie);     
    this.navCtrl.navigateForward('/maps');
    this.modalCtrl.dismiss();      
  }

  // async toBuy() {
  //   const modal = await this.modalCtrl.create({
  //     component: MapsPage,
  //     cssClass: "address-modal",
  //     componentProps: {},
  //   });
  //   //console.log('localdb', this.detailMovie);
  //   this.localData.saveDetailMovie(this.detailMovie);

  //   return await modal.present();
  // }
}
