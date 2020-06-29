import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { DetailMovie, Movie, ListMovie } from '../interfaces/interfaces';

const lstMovies : Movie[]=[];
     
@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  listMovie: Movie[] = [];
  detailMovie: DetailMovie[] = [];

  constructor(private storage: Storage) {}

  saveLocalListMovies(lstMovies: Movie[], status: boolean) {
    this.storage.clear();
    for (const list of lstMovies) {  
      this.listMovie.push(list);
      this.storage.set('localListMovies', this.listMovie);
    }
  }

  async getLocalListMovies(): Promise<Movie> {
    try {
      let result : Movie[]=[];
      let lstMovie : Movie[]=[];
      result = await this.storage.get('localListMovies');
      for(let item of result)
      {
        this.listMovie.push(item);
      }    
      //return lstMovie;
    } catch (reason) {
      console.log(reason);
      return null;
    }
  }

  saveDetailMovie(detMovie: DetailMovie) {
    let exist = false;
    // this.detailMovie.find(x => x.id === detMovie.id);
    for (const movie of this.detailMovie) {
      if (movie.id === detMovie.id) {
        exist = true;
        break;
      }
    }
    if (!exist) {
      this.detailMovie.push(detMovie);
      this.storage.set('localMovie', this.detailMovie);
    }
  }
}
