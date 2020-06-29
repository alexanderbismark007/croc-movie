import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
  } from '@angular/common/http';
  import { Storage } from '@ionic/storage'
  import { Observable, throwError, from} from 'rxjs';
  import { map, tap, catchError, switchMap } from 'rxjs/operators';
  import { Injectable } from '@angular/core';
  import { LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../environments/environment.prod';

  const TOKEN_KEY = 'BismarkToken';
  @Injectable()
  
  export class HttpConfigInterceptor implements HttpInterceptor {
    
    isLoading: boolean = false;
    constructor(public storage: Storage,
                public loadingCtrl: LoadingController,
                private toastCtrl: ToastController) { }

                
    intercept(request: HttpRequest<any>, 
                 next: HttpHandler): 
            Observable<HttpEvent<any>> {
      return from(this.storage.get(TOKEN_KEY))
        .pipe(
          switchMap(token => {
            let newHeaders = request.headers;           
            newHeaders = newHeaders.append('API-KEY', environment.apiKey);  
            request = request.clone(
                { 
                  //url: environment.urlDetails+`/discover/movie?api_key=${environment.apiKey}&language=${ environment.language }&sort_by=popularity.desc&include_adult=false&include_video=false&page=2`, 
                  setHeaders: { Authorization: `API-KEY ${environment.apiKey}` } }
                );
                console.log('INTERCEPTOR HEADER',request);        
            return next
              .handle(request)
              .pipe(
                tap((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                    console.log('INTERCEPTOR:processing via tap:', event);
                  }
                }),
                map((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                    console.log('INTERCEPTOR:processing via map:', event);               
                  }
                  return event;
                }),              
                catchError((error: HttpErrorResponse) => {
                  console.error("INTERCEPTOR ERR.HttpErrorResponse:",error);
                  return throwError(error);
                })
            );
          })
        );
    }

  async presentErrorToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top',
      color: 'danger',
      cssClass: 'toast',
      //showCloseButton: true,
      //closeButtonText: "OK",
    });
    toast.present();
  }

  /**
   * 
   */
  async presentLoading() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      duration: 5000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss().then(() => console.log());
        }
      });
    });
  }
  
  // Cierre del loading
  async dismissLoading() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }

  }