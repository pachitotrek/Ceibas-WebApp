import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  status:boolean=true;

  constructor(public ws:WebsocketService) { 
    this.checkStatus();
  }

  ngOnInit() {}

  checkStatus(){
    this.ws.listen('disconnect').subscribe((data:any)=>{
        if(data){
          this.status=false;
          window.location.reload();
        }
    });
  }  


}
