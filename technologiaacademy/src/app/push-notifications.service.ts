import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationsService {

  notificationsCount = 0;

  constructor(  ) { }

  pushNotification(){
    this.notificationsCount++;
    console.log(this.notificationsCount);
    
  }

  getNotificationsCount(){
    return this.notificationsCount;
  }

}
