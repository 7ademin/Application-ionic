import { Component, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsMapTypeId,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';
import { ActionSheetController, Platform, AlertController } from '@ionic/angular';
import { Restaurant } from '../models/restaurant';
import { RestaurantService } from '../services/restaurant.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage {
 
 // lat = 14.713570;
 // lng = -17.450947;

  currentLat:any;
  currentLng:any;
  zoom = 12;
  icon= {
    url: '././assets/icon/restau3.png',
    scaledSize: { width: 25, height: 25 },
    labelOrigin:{x:25, y:35}

  };
  iconPosition={
    url: '././assets/icon/position.png',
    scaledSize: { width: 30, height: 30},
    labelOrigin:{x:25, y:-5}
  }

  locations = [  ]

  restaurants: Restaurant[] = [];


  constructor(
    restauApi: RestaurantService
  ) {     
    restauApi.getRestaurants()
    .subscribe(
      restaux => {
        this.restaurants = restaux;
        for (const restau of restaux) {
          this.locations.push(
            {
              lat: restau.latitude,
              lng: restau.longitude,
              name: restau.nomRestaurant
            }
          )
        }
      }
    );
    
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.currentLng = +pos.coords.longitude;
        this.currentLat = +pos.coords.latitude;
      });
    }
  
  }

/* load() {
  this.geolocation.getCurrentPosition().then((resp) => {
    let lat = resp.coords.latitude;
    let lng = resp.coords.longitude;
    const latLng = new google.maps.LatLng(lat, lng);
    this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 14,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false
    });

});
}
*/


/*loadMap() {
	Environment.setEnv({
		API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyDDep_5J5IBOMU2eGyq9qZWAGt-ER1OxAo',
		API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyDDep_5J5IBOMU2eGyq9qZWAGt-ER1OxAo'
	});
	this.map = GoogleMaps.create('map_canvas', {
		camera: {
			target: {
				lat: 14.713570,
				lng: -17.450947
			},
			zoom: 12,
			tilt: 30
		}
	});
}*/

/* async mapOptions() {
  const actionSheet = await this.actionCtrl.create({
    buttons: [{
      text: 'Satellite',
      handler: () => {
        console.log('Satellite clicked');
        this.map.setMapTypeId(GoogleMapsMapTypeId.SATELLITE);
      }
    }, {
      text: 'Plan',
      handler: () => {
        console.log('Plan clicked');
        this.map.setMapTypeId(GoogleMapsMapTypeId.NORMAL);
      }
    }, {
      text: 'Terrain',
      handler: () => {
        console.log('Terrain clicked');
        this.map.setMapTypeId(GoogleMapsMapTypeId.TERRAIN);
      }
    }, {
      text: 'Hybrid',
      handler: () => {
        console.log('Hybrid clicked');
        this.map.setMapTypeId(GoogleMapsMapTypeId.HYBRID);
      }
    }, {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}*/


}