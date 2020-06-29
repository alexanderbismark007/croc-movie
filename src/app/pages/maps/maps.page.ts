import { Component, OnInit } from '@angular/core';

import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapsAnimation, MyLocation } from "@ionic-native/google-maps";
import { Platform, LoadingController, ToastController, ModalController, NavController } from "@ionic/angular";
import { TranslateappService } from '../../services/translateapp.service';
import { MasterPage } from '../master/master.page';

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

  loadMap() {
    // Esta función inicializa la propiedad de clase
    // map
    // que va a contener el control de nuestro mapa de google

    // Para crear nuestro mapa debemos enviar como parametros
    // el id del div en donde se va a renderizar el mapa (paso anterior)
    // y las opciones que configuran nuestro mapa
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

  async toMain(){
    this.navCtrl.navigateForward('/master');
  }

  async locateHome() {
    // Limpiamos todos los elementos de nuestro mapa
    this.map.clear();

    // Creamos un componente de Ionic para mostrar un mensaje
    // mientras obtenemos esperamos que termine el proceso de
    // obtener la ubicación
    this.loading = await this.loadingCtrl.create({
      message: "Wait please"
    });
    
    // Presentamos el componente creado en el paso anterior
    await this.loading.present();

    // Ejecutamos el método getMyLocation de nuestra propiedad de clase
    // map
    // para obtener nuestra ubicación actual
    this.map
      .getMyLocation()
      .then((location: MyLocation) => {
        // Una vez obtenida la ubicación cerramos el mensaje de diálogo
        this.loading.dismiss();

        // Movemos la camara a nuestra ubicación con una pequeña animación
        this.map.animateCamera({
          target: location.latLng,
          zoom: 17,
          tilt: 30
        });

        // Agregamos un nuevo marcador
        let marker: Marker = this.map.addMarkerSync({
          title: "Sending :-)",
          snippet: "Enjoy the movie...",
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // Mostramos un InfoWindow
        marker.showInfoWindow();

        // Podemos configurar un evento que se ejecute cuando
        // se haya dado clic
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          this.showToast("clicked!");
        });
      })
      .catch(error => {
        // En caso de que haya un problema en obtener la
        // ubicación
        this.loading.dismiss();
        this.showToast(error.error_message);
      });
  }

  // Función que muestra un Toast en la parte inferior
  // de la pantalla
  async showToast(mensaje) {
    let toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom"
    });

    toast.present();
  }
}
