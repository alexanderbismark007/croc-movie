import { Component, OnInit } from '@angular/core';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from "@ionic-native/google-maps";
import { Platform, LoadingController, ToastController, ModalController, NavController } from "@ionic/angular";
import { TranslateappService } from '../../services/translateapp.service';

@Component({
  selector: "app-maps",
  templateUrl: "./maps.page.html",
  styleUrls: ["./maps.page.scss"],
})
export class MapsPage implements OnInit {
  map: GoogleMap;
  loading: any;
  selectedLanguage:string;

  constructor(  public loadingCtrl: LoadingController,
                private navCtrl: NavController,
                public toastCtrl: ToastController,
                private platform: Platform,
                private translateConfigService: TranslateappService ) {
    this.selectedLanguage = this.translateConfigService.getLanguage();  
  }

  async ngOnInit() {
    await this.platform.ready();
    await this.loadMap();
  }

/**
 * Method for load intance of map
 */
  loadMap() {
    this.map = GoogleMaps.create("map_canvas", {
      camera: {
        target: {
          lat: -16.5208549,
          lng: -68.1461219
        },
        zoom: 20,
        tilt: 40
      }
    });
  }

  /**
   * Redirect to Main Page event
   */
  async toMain(){
    this.navCtrl.navigateForward('/master');
  }

  /**
   * Method for locate referential coordinate
   */
  async locateHome() {
 
    this.map.clear();

    this.loading = await this.loadingCtrl.create({
      message: "Wait please"
    });
    
    await this.loading.present();

    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        this.loading.dismiss();
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        let marker: Marker = this.map.addMarkerSync({
          title: "Sending :-)",
          snippet: "Enjoy the movie...",
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        marker.showInfoWindow();

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });
      })
      .catch(error => {
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }


  /**
   * Toast COmponent
   * @param msg Message parameter
   */
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }
}
