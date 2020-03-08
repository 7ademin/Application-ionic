import { Component } from '@angular/core';
import { Plat } from '../models/plat';
import { PlatsService } from '../services/plats.service';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'app-plat',
  templateUrl: 'plat.page.html',
  styleUrls: ['plat.page.scss']
})
export class PlatPage {

  plats: Plat[];
  constructor(private route : Router , private api :PlatsService,private utils : UtilsService) {
    this.getPlats();
  }
getPlats():void{
  this.api.getPlats().subscribe(Response=>{
    this.plats = Response;
  })
}

modifierPlat(id:any):void{
  this.route.navigate(['tabs/plat/modifier',id]);
}

delete(plat:Plat):void{
  this.api.deletePlat(plat.id).subscribe(Response=>{
    this.getPlats();
    this.utils.presentToast("Suppression effectué","default");
  });
}
}
