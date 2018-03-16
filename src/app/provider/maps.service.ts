import { Injectable } from '@angular/core';
import { Marker } from '../interface/marker.interface';

@Injectable()
export class MapsService {

  markers: Marker[] = [];

  constructor() { }

  pushMarker( marker: Marker ) {
    this.markers.push( marker );
    this.saveMarkers();
  }

  removeMarker( index: number) {
    this.markers.splice(index, 1);
    this.saveMarkers();
  }

  saveMarkers() {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  loadMarkers() {
    localStorage.getItem('markers') ?
        this.markers = JSON.parse( localStorage.getItem('markers')) :
        this.markers = [];
  }
}
