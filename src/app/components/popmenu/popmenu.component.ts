import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss'],
})
export class PopmenuComponent implements OnInit {
  user:any=[];
  normal=[
    {id:1,titulo:'Vista General',link:'/inicio'},
    {id:2,titulo:'Vertedero',link:'/uno'},
    {id:3,titulo:'Filtros',link:'/dos'},
    {id:3,titulo:'Tanques',link:'/tres'},
    {id:3,titulo:'Apoyo',link:'/apoyo'},
    {id:6,titulo:'Cerrar Sesión',link:'/logout'}
  ];

  menu:any=[];
  constructor(private local:LocalStorageService,private us:UserService,private router:Router) { }

  ngOnInit() {
    this.checkState();
  }

  checkState(){
    this.local.cargarStorage('usuario').then((data)=>{
      this.user=data;
      this.menu=this.normal;   
    }).catch((error)=>{
    
    
    });
  }

  make(item){
    if(item.id==6){
      this.us.logout(); 
      window.location.reload();
    }else{
      this.router.navigate([item.link]);
    }
 
  }

}
