import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { Restaurant } from 'src/app/models/restaurant';
import { PlatsService } from 'src/app/services/plats.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.page.html',
  styleUrls: ['./ajouter.page.scss'],
})
export class AjouterPage implements OnInit {

  plat: Plat;
  restaurants: Restaurant[];

  constructor(private service: PlatsService, public toastController: ToastController,
    private route: Router, restauApi: RestaurantService) {
    this.plat = new Plat();

    restauApi.getRestaurants()
    .subscribe(
      restaux => {
        this.restaurants = restaux;
        for (const restau of restaux) {
          this.restaurants.push(
      
          )
        }
      }
    );
  }

  ngOnInit() {
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'success',
      position: 'bottom'
    });
    toast.present();
  }
  ajouterPlat(): void {
    this.service.postPlat(this.plat).subscribe(plat => {
      this.presentToast("Plat ajouté avec succès.");
      this.route.navigate(['/tabs/tab2']);
    }, error => {

    })
  }

}
