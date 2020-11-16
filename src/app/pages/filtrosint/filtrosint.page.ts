import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import {Observable, timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-filtrosint',
  templateUrl: './filtrosint.page.html',
  styleUrls: ['./filtrosint.page.scss'],
})
export class FiltrosintPage implements OnInit {
  id: any = "";
  data: any = [];
  active: boolean = false;
  private emicion:Subscription = new Subscription();
  obs$: Observable<any> = timer(30000);

  constructor(private route: ActivatedRoute, private api: ApiService, private ws: WebsocketService) {
    this.receive();
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getFiltro(this.id);
  }

  receive() {
    this.ws.listen('interior').subscribe((resp: any) => {
      this.data = resp;  
      this.active = true;
      this.calling();     
    })
  }

  getFiltro(id) {
    let datos = { id: "interior", value: id };    
    this.api.SendDatos(datos, 'interior');
  }

  calling(){
    let query = { id: "interior", value: this.id };
      let Observer: any = {
        next: (data: any) => {
          this.api.SendDatos(query, 'interior');
        },
        error: (error: any) => console.log(error),
        complete: () => console.log("complete")
      }
      this.emicion.add(this.obs$.subscribe(Observer));
  }

  ionViewWillLeave() {
    this.emicion.unsubscribe();
  }





}
