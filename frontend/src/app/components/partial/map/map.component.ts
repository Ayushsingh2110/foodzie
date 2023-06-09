import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LatLng, LatLngExpression, LatLngTuple, LeafletMouseEvent, Map, Marker, icon, map, marker, tileLayer } from 'leaflet';
import { Order } from 'src/app/resources/datatypes/order';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input()
  order!:Order;

  private readonly MARKER_ZOOM_LEVEL = 20;
  private readonly MARKER_ICON = icon({
    iconUrl: 'http://res.cloudinary.com/foodmine/image/upload/v1638842791/map/marker_kbua9q.png',
    iconSize: [42,42],
    iconAnchor: [21,42],
  });
  private readonly DEFAULT_LATLNG: LatLngTuple = [13.34, 21.34]

  @ViewChild('map', {static:true})
  mapRef!:ElementRef;
  currentMarker!:Marker;
  map!:Map;
  constructor(private locationService:LocationService) { }

  ngOnInit(): void {
    this.initializeMap();
  }

  initializeMap(){
    if(this.map) return;

    this.map = map(this.mapRef.nativeElement, {
      attributionControl: false
    }).setView(this.DEFAULT_LATLNG, 1);

    tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(this.map);

    this.map.on('click', (e:LeafletMouseEvent) => {
      this.setMarker(e.latlng);
    })
  }

  FindMyLocation(){
    this.locationService.getUserLocation().subscribe({
      next: (latlng) =>{
        this.map.setView(latlng, this.MARKER_ZOOM_LEVEL)
        this.setMarker(latlng)
      }
    })
  }

  setMarker(latlng:LatLngExpression){
    this.addressLatlng = latlng as LatLng;
    if(this.currentMarker){
      this.currentMarker.setLatLng(latlng);
      return;
    }

    this.currentMarker = marker(latlng, {
      draggable: true,
      icon: this.MARKER_ICON
    }).addTo(this.map)

    this.currentMarker.on('dragend', () => {
      this.addressLatlng = this.currentMarker.getLatLng();
    })
  }

  set addressLatlng(latlng:LatLng){
    latlng.lat = parseFloat(latlng.lat.toFixed(8));
    latlng.lng = parseFloat(latlng.lng.toFixed(8));
    this.order.addressOnMap = latlng;
    console.log(this.order.addressOnMap);
  }

}
