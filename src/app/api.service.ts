
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
   private message:any=new BehaviorSubject('Default message');
  currentmessage=this.message;

   getdata(){
    return this.currentmessage;
   }

   senddata(dt:any){
    return this.message.next(dt);
   }

}
