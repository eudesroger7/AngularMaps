import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  })
export class AppComponent  {

  // google maps zoom level
  zoom: number = 15;
  
  // initial center position for the map
  lat: number = -8.0624086;
  lng: number = -34.8982486;
  
  markers: marker[] = [
	  {
		lat: -8.0624086,
		lng: -34.8982486,
		title: 'a'
      
	  },
	  {
		lat: -8.0664086,
		lng: -34.8982486,
		title: 'b'
	  },
	  {
		lat: -8.0644086,
		lng: -34.8982486,
		title: 'c'
	  }
  ]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  title: string;
}
