import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  obs$= new Observable();

  constructor() { }

  ListenStatus(event:any){
    this.obs$= new Observable( observer=>{
        observer.next(event);
    });
    return this.obs$;
  }

}
