import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {PlaceDataService} from '../services/placeService/place-data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page  {

  placeData = [];
  filteredPlace = [];
  isFiltered: boolean;

  constructor(
      private router: Router,
      private placeService: PlaceDataService,
  ) {
    fetch('./assets/data/place.json').
    then(res => res.json()).then(data => {
      this.placeData = data.places;
      this.placeService.setPlaces(this.placeData);
    });
  }

  searchMaps(event) {
    if (event.target.value.length > 0) {
      const filteredJson = this.placeData.filter((row) => {
        if (row.name.indexOf(event.target.value) !== -1) {
          return true;
        } else {
          return false;
        }
      });
      this.isFiltered = true;
      this.filteredPlace = filteredJson;
    }
  }
  getPlaceDetails(place) {
    this.placeService.setPlace(place);
    this.router.navigate(['/place-detail']);
  }

  allPlaceMap() {
    this.router.navigate(['/all-place']);
  }

}
