import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  usuarios:any=[];
  form:FormGroup;
  form2:FormGroup;
  edit:boolean=false;
  editpass:boolean=false;
  pannel:boolean=true;

  constructor(private us:UserService,public loadingController: LoadingController,public alertController: AlertController) {
    this.form= new FormGroup({
      nombre:new FormControl(null,Validators.required),
      apellido:new FormControl(null,Validators.required),
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,Validators.required),
      role:new FormControl(null,Validators.required),
      pass:new FormControl(null,Validators.required),
      _id:new FormControl(null)  
    });
    this.form2= new FormGroup({
        pass:new FormControl(null,Validators.required),
        pass2:new FormControl(null,Validators.required),
        _id:new FormControl(null,Validators.required) 
    });


   }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.us.GetUsers().subscribe((resp:any)=>{
      this.usuarios=resp.usuarios;    
    });
  }

  setUser(user){
    this.form.setValue(user);
    this.edit=true;
  }
  setPass(id){
    this.form2.patchValue({"_id":id});
    this.editpass=true;
    this.pannel=false;    
  }
  crear(){
    this.presentLoading();
    this.us.crear(this.form.value).subscribe((resp:any)=>{
      if(resp){
        this.hideLoader();
        this.form.reset();
        this.getUsers();
        this.presentAlert();
      }
    });
  }
  update(){
    this.presentLoading();
    this.us.update(this.form.value).subscribe((resp:any)=>{
        if(resp){
          this.hideLoader();
          this.form.reset();
          this.getUsers();
          this.presentAlert();
        }
    });
  }
  refresh(){
    this.edit=false;
    this.editpass=false;
    this.pannel=true;
    this.form.reset();
    this.form2.reset();
  }
  delete(data){
    this.presentLoading();
    this.us.deleteUser(data).subscribe((resp:any)=>{
            if(resp.ok){
              this.getUsers(); 
              this.hideLoader();
            }
    });
  }

  updatePass(){
    this.us.updatePass(this.form2.value).subscribe((resp:any)=>{
      if(resp){
        this.hideLoader();
        this.form2.reset();
        this.getUsers();
        this.presentAlert();
      }
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Actualizando por favor espere !!'      
    });
    await loading.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito',
      mode:'ios',
      cssClass:'primary',
      subHeader: 'Datos Actualizados',
      message: 'Haz Actualizado satisfactoriamente los datos del usuario',
      buttons: ['OK']
    });

    await alert.present();
  }
  cargando(){
    this.presentLoading();
  }
  async hideLoader() {
    setTimeout(() => {
      this.loadingController.dismiss();
      return true;
    }, 500);
  }

}
