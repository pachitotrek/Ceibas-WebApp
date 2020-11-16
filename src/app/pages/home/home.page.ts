import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  groups:Array<any>=[];
  points:any=[];
  word:string="";
  data:Array<any>=[];

  slideOpts = {
    slidesPerView: 4,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1.3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 2.5,
        spaceBetween: 40
      }
    }
  };
  constructor(private api:ApiService,private nav:Router) {

    
  }


  ngOnInit(){  
  }

  
  



}
