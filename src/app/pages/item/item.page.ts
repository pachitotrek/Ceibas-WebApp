import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  groups: any;

  constructor(private api:ApiService) { }

  ngOnInit() {
    let id =4949;
    // this.getParentsGroup(id)
  }

  // getParentsGroup(id){
  //   this.api.GetGroup(id).subscribe((resp:any)=>{
  //     if(resp.ok){
  //       this.groups=resp.result;
  //       console.log(this.groups);
  //     }
  //   });
  // }

}
