import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ListMovie, DetailMovie, CreditsMovie } from "../interfaces/interfaces";
import { environment } from "../../environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getListMovies(language: string) {
    const httpOptions = { headers: new HttpHeaders({}) };
    let lang = "en-EN";
    if (language != null) {
      switch (language) {
        case "en":
          lang = 'en-EN';
          break;
        case "es":
          lang = 'es-ES';
          break;
        default:
          lang = 'en-EN';          
          break;
      }
    } else {
      lang = "en-EN";
    }
    return this.http
      .get<ListMovie>(
        `${environment.urlBase}/discover/movie?api_key=${environment.apiKey}&language=${ lang }&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`,
        { headers: httpOptions.headers }
      )
      .pipe(
        tap((lstMovies) => {
          console.log("ListMovie > ", lstMovies);
        })
      );
  }

  getDetailMovie(id: string, lang: string) {
    return this.http
      .get<DetailMovie>(
        `${environment.urlBase}/movie/${id}?api_key=${environment.apiKey}&language=${lang}`
      )
      .pipe(
        tap((lstMovies) => {
          console.log("DetailMovie > ", lstMovies);
        })
      );
  }

  getCreditsMovie(id: string) {
    return this.http
      .get<CreditsMovie>(
        `${environment.urlBase}/movie/${id}/credits?api_key=${environment.apiKey}`
      )
      .pipe(
        tap((lstMovies) => {
          console.log("CreditsMovie > ", lstMovies);
        })
      );
  }
}
