import {NgZone, OnInit, Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
//import { HttpJSONService } from './HttpJSON.service'

import {} from '@types/googlemaps';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public searchControl: FormControl;
    public lat : number;
    public lon: number;

    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) {}

    ngOnInit() {

      //create search FormControl
      this.searchControl = new FormControl();

      //load Places Autocomplete
      this.mapsAPILoader.load().then(() => {
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
              //get the place result
              let place: google.maps.places.PlaceResult = autocomplete.getPlace();

              //verify result
              if (place.geometry === undefined || place.geometry === null) {
                return;
              }

              //set latitude, longitude and zoom
              this.lat = place.geometry.location.lat();
              this.lon = place.geometry.location.lng();
              //getJSONrequest(this.lat, this.lon);
        });
      });
    });
  }
}
