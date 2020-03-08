import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/restaurant';
import { URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http : HttpClient ) { }
  getRestaurant(id:number): Observable<Restaurant>{
    return this.http.get<Restaurant>(URL+"/restaurants/"+id).pipe() ;

  }
  getRestaurants(): Observable<Restaurant[]>{
    return this.http.get<Restaurant[]>(URL+"/restaurants").pipe() ;

  }
  deleteRestaurant(id:number) : Observable<Restaurant>{
    return this.http.delete<Restaurant>(URL+"/restaurants/"+id).pipe() ;
  }
  postRestaurant(restaurant:Restaurant): Observable<Restaurant>
  {
    return this.http.post<Restaurant>(URL+"/restaurants/",restaurant).pipe() ;
  }
  updateRestaurant(restaurant:Restaurant)
  {
    return this.http.put<Restaurant>(URL+"/restaurants/"+restaurant.id,restaurant).pipe() ;
  }
}
