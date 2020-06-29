import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  networkStatus:boolean;
  constructor() { }

  setStatus(status:boolean){
    this.networkStatus = status;
  }

  getStatus()
  {
    return this.networkStatus;
  }
}
