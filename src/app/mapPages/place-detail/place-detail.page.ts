import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {PlaceDataService} from '../../services/placeService/place-data.service';
import {Place} from '../../model/place';

declare var google;

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  @ViewChild('map', {static: true}) mapContainer: ElementRef;
  map: any;
  place = {} as Place;

  constructor(
      private geolocation: Geolocation,
      private placeSerivice: PlaceDataService
  ) { }

  ngOnInit() {
    this.place = this.placeSerivice.getPlace();
    this.displayGoogleMap();
  }
  displayGoogleMap() {
    const latLng = new google.maps.LatLng(this.place.latitude, this.place.longitude);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.place.name + this.place.state);
  }
  addInfoWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}

