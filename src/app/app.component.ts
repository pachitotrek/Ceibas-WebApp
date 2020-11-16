import { Component } from '@angular/core';

import { Platform, Events, MenuController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user.service';
import { LocalStorageService } from './services/local-storage.service';
import { Router } from '@angular/router';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages: any = [];
  data_menu = [
    { pagina: "Vista General", link: "inicio" , id:1 },
    { pagina: "Vertedero", link: "uno" , id:2 },
    { pagina: "Filtros", link: "dos" , id:3 },
    { pagina: "Tanques", link: "tres", id:4 },
    { pagina: "Servicios de Apoyo", link: "apoyo",id:2 },
    { pagina: "Manual", link: "apoyo",id:9 },
    { pagina: "Cerrar Sesion", link: "logout", id:6 }
  ];
  data_menu_admin = [
    { pagina: "Vista General", link: "inicio" , id:1 },
    { pagina: "Vertedero", link: "uno" , id:2 },
    { pagina: "Filtros", link: "dos" , id:3 },
    { pagina: "Tanques", link: "tres", id:4 },
    { pagina: "Servicios de Apoyo", link: "apoyo",id:2 },
    { pagina: "Usuarios", link: "register",id:2 },
    { pagina: "Manual", link: "apoyo",id:9 },
    { pagina: "Cerrar Sesion", link: "logout", id:6 }
  ];
  data_menu_off = [
    { pagina: "iniciar", link: "login" }
  ];

  auth2: any = [];
  active: boolean = false;
  device: number = null;
  usuario: any = [];
  login: boolean = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events,
    private menu: MenuController,
    public modalController: ModalController,
    public userService: UserService,
    private local: LocalStorageService,
    private router:Router,
    public ws:WebsocketService
  ) {
    this.initializeApp();
    this.menuToogle();
    this.checkState();
    this.userService.status$.subscribe((data) => {
      // this.menu=this.data_menu_dos;
      this.checkState();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.device = this.platform.width();
      this.getDevice(this.device);
      this.appPages = this.data_menu;
      this.checkState();
    });
  }
  menuToogle() {
    this.events.subscribe('menu:toogle', () => {
      this.checkState();
      // user and time are the same arguments passed in `events.publish(user, time)`
      if (this.menu.isOpen) {
        this.active = true;
      } else {
        this.active = true;
      }
    });
  }

  getDevice(width) {
    if (width < 1024) {
      this.active = true;
    }
  }

  async  checkState() {
    let status = await this.userService.Logeado();

    if (status) {
      this.usuario = await this.local.cargarStorage('usuario').then((data: any) => {
        return data;
      }).catch((err: any) => {
        return null;
      });
      if (this.usuario) {
        this.login = true;
        this.router.navigate(['inicio']);

        if(this.usuario.role==2){
          this.appPages=this.data_menu_admin;
        }else{
          this.appPages=this.data_menu;
        }    
      }    
    } else {
      this.appPages=this.data_menu_off;
      this.login = false;
    }
  }
  make(item){
    if(item.id==6){
      this.userService.logout(); 
      window.location.reload();
    }else if(item.id==9){
      window.open("https://manual.plantaceibas.cf/", "_blank");
    }else{
      this.router.navigate([item.link]);
    } 
  }

}
