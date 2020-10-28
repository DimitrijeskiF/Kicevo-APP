import { Injectable } from '@angular/core';
import {Place} from '../../model/place';

@Injectable({
  providedIn: 'root'
})
export class PlaceDataService {
  places: [];
  place: Place;
  constructor() { }
  setPlaces(data) {
    this.places = data;
  }

  getPlaces() {
    return this.places;
  }

  setPlace(data) {
    this.place = data;
  }

  getPlace() {
    return this.place;
  }
}
