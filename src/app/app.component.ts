import { Component } from '@angular/core';
import { MapsService } from './provider/maps.service';
import {Marker} from './interface/marker.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lat = 40.965062;
  lng = -5.664113;
  zoom = 14;

  markerSelected: Marker = null;
  draggable = '1';

  constructor ( public ms: MapsService ) {
    ms.loadMarkers();
  }

  mapClick( event ) {

    const newMarker: Marker = {
      lat: event.coords.lat,
      lng: event.coords.lng,
      title: 'Sin título',
      draggable: true
    };

    this.markerSelected = newMarker;
    this.ms.pushMarker( newMarker );
  }

  markerClick( marker: Marker ) {
    this.markerSelected = marker;
    this.markerSelected.draggable ?
      this.draggable = '1' :
      this.draggable = '0';
  }

  dragEndMarker( marker: Marker, event, index: number ) {
    marker.lat = event.coords.lat;
    marker.lng = event.coords.lng;
    this.deleteMarker(index);
    this.ms.pushMarker(marker);
    this.markerSelected = marker;
  }

  deleteMarker( index: number ) {
    this.ms.removeMarker( index );
    this.markerSelected = null;
  }

  changeDraggable() {
   this.draggable === '1' ?
     this.markerSelected.draggable = true :
     this.markerSelected.draggable = false;
   this.ms.saveMarkers();
  }
}
