import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateappService } from 'src/app/services/translateapp.service';
import { NavController, ToastController } from '@ionic/angular';
import { Plugins, NetworkStatus, PluginListenerHandle } from '@capacitor/core';
import { HttpConfigInterceptor } from 'src/app/interceptors/http.interceptor';

const { Network } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit, OnDestroy {

  selectedLanguage:string;
  isConnected:boolean;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;

  constructor(private translateConfigService: TranslateappService,
              private navCtrl: NavController, 
              public toastController: ToastController
              ){
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();  
  }
 
  async ngOnInit() {

    this.networkListener = Network.addListener('networkStatusChange', (status) => {
      //console.log("Network status changed", status);
      this.networkStatus = status;
    });

    this.networkStatus = await Network.getStatus();

    if(this.networkStatus.connected)    
      this.presentToast('Modo ONLINE');      
    else
    this.presentToast('Modo OFFLINE, No existe conexion a internet...');
  }
  
  ngOnDestroy() {
    this.networkListener.remove();
  }

  languageChanged(){
    //console.log('Lang>', this.selectedLanguage)
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  toMaster() {    
    if(this.networkStatus.connected)
      this.navCtrl.navigateForward('/master');
    else{
      this.presentToast('Modo OFFLINE');
    }
  }

  async presentToast(input:string) {
    const toast = await this.toastController.create({
      message: input,
      duration: 2000
    });
    toast.present();
  }
}
