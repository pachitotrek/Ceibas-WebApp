import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events, MenuController, LoadingController, PopoverController } from '@ionic/angular';
import { Global } from 'src/app/services/global';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PopmenuComponent } from '../popmenu/popmenu.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  data_menu = [
    { pagina: "Vista General", link: "inicio" },
    { pagina: "Vertedero", link: "uno" },
    { pagina: "Filtros", link: "dos" },
    { pagina: "Tanques", link: "tres" },
    { pagina: "Servicios de Apoyo", link: "apoyo" }
  ];
  data_admin = [
    { pagina: "Vista General", link: "inicio" },
    { pagina: "Vertedero", link: "uno" },
    { pagina: "Filtros", link: "dos" },
    { pagina: "Tanques", link: "tres" },
    { pagina: "Servicios de Apoyo", link: "apoyo" },
    { pagina: "Usuarios", link: "register" }
  ];
  

  auth2: any = [];
  login: boolean;
  usuario: any = [];
  menu: any = [];

  constructor(private router: Router, private events: Events, private menu_c: MenuController,
    private userService: UserService, public loadingController: LoadingController, private local: LocalStorageService,
    public popoverController: PopoverController) {
    this.menu=this.data_menu;
    this.checkState();

    this.userService.status$.subscribe((data) => {
      // this.menu=this.data_menu_dos;
      this.checkState();       
    });
  }

  ngOnInit() {
    this.checkState();
  }

  nav(item) {
    this.router.navigate([`/${item}`]);
  }


  menutoogle() {    
    this.events.publish('menu:toogle');
    this.menu_c.open();
  }



  async  checkState() {
    let status = await this.userService.Logeado();  
    if(status){      
      this.usuario = await this.local.cargarStorage('usuario').then((data:any)=>{
          return data;
      }).catch((err:any)=>{
          return null;
      });
      if(this.usuario){
        this.login=true;
      }
      if(this.usuario.role==2){
        this.menu=this.data_admin;
      }else{
        this.menu=this.data_menu;
      }   
    }else{
      this.login=false;
    } 
  }

  async popmenu(ev: any) {
    const popover = await this.popoverController.create({
      component: PopmenuComponent,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    return await popover.present();
  }









}
