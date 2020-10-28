import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {PlaceDataService} from '../../services/placeService/place-data.service';

declare var google;
@Component({
  selector: 'app-all-place',
  templateUrl: './all-place.page.html',
  styleUrls: ['./all-place.page.scss'],
})
export class AllPlacePage implements OnInit {
  @ViewChild('map', {static: true}) mapContainer: ElementRef;
  map: any;
  placeData = [];

  constructor(
      private geolocation: Geolocation,
      private placeService: PlaceDataService
  ) { }

  ngOnInit() {
    this.placeData = this.placeService.getPlaces();
    this.displayGoogleMap();
    this.getMarkers();
  }
  displayGoogleMap() {
    const latLng = new google.maps.LatLng(41.500223, 20.955354);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }
  getMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.placeData.length; _i++) {
      if (_i > 0) {
        this.addMarkersToMap(this.placeData[_i]);
      }
    }
  }
  addMarkersToMap(place) {
    const position = new google.maps.LatLng(place.latitude, place.longitude);
    const placeMarker = new google.maps.Marker({ position, title: place.name });
    placeMarker.setMap(this.map);
  }
}

