import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../../services/movies.service";
import { Movie } from "src/app/interfaces/interfaces";
import { TranslateappService } from "src/app/services/translateapp.service";
import { NavController } from "@ionic/angular";
import { Plugins, NetworkStatus, PluginListenerHandle } from "@capacitor/core";
import { environment } from '../../../environments/environment';
import { DatabaseService } from '../../services/database.service';

const { Network } = Plugins;

@Component({
  selector: "app-master",
  templateUrl: "./master.page.html",
  styleUrls: ["./master.page.scss"],
})
export class MasterPage implements OnInit {
  movies: Movie[] = [];
  isConnected: boolean;
  networkStatus: NetworkStatus;
  networkListener: PluginListenerHandle;
  selectedLanguage: string;

  constructor(
    private movieService: MoviesService,
    private translateConfigService: TranslateappService,
    private navCtrl: NavController,
    private localData: DatabaseService,
  ) {
    this.selectedLanguage = this.translateConfigService.getLanguage();
  }

  async ngOnInit() {
    this.networkListener = Network.addListener(
      "networkStatusChange",
      (status) => {
        //console.log("Network status changed", status);
        this.networkStatus = status;
      }
    );
    this.networkStatus = await Network.getStatus();

    if (this.networkStatus.connected) {
      console.log('Online mode');
      this.movieService
        .getListMovies(this.selectedLanguage)
        .subscribe((res) => {
          this.movies=res.results.slice(0,environment.limit);          
          this.localData.saveLocalListMovies(this.movies, this.networkStatus.connected);           
        });        
    } else {
       console.log('Offline mode');       
       this.localData.getLocalListMovies(); 
       //console.log('>>>',this.localData.listMovie);
       this.movies = this.localData.listMovie;      
    } 
  }

  ngOnDestroy() {
    this.networkListener.remove();
  }

  toLogin() {
    this.navCtrl.navigateForward("/login");
  }

  toMap() {
    this.navCtrl.navigateForward("/maps");
  }
}
