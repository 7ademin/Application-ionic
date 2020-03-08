import { Component, OnInit } from '@angular/core';
import { Plat } from '../models/plat';
import { Router } from '@angular/router';
import { PlatsService } from '../services/plats.service';
import { UtilsService } from '../services/utils.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  today = Date.now();
  constructor() {
    
  }
 

 

}
