import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateappService {
  
  selectLang:string;

  constructor(private translate: TranslateService) {   
  }
  
  /**
   * 
   */
  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    return language;
  }

  setLanguage(setLang) {
    this.selectLang = setLang;
    this.translate.use(setLang);
  }

  getLanguage()
  {
    return this.selectLang;
  }
}
