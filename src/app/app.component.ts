import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
  })
export class AppComponent  {
	//set initial map config
	zoom: number = 15;
	lat: number = -8.0624086;
	lng: number = -34.8982486;

	const userLogins = [
        {"lat": -8.0624086, "lng": -34.8982486, "name": "Eudes1", "id": "2", "date": "2012/12/13"}
    ];



	clickedMarker(index: number) {
	console.log(`clicked the marker: ${label || index}`);
	console.log(userLogins);
	}
  
	markerDragEnd(m: marker, $event: MouseEvent) {
	console.log('dragEnd', m, $event);
	}

	markers: marker[] = [
	  {
		lat: -8.0644086,
		lng: -34.8982486,
			title: 'teste',
		label: 'A',
		draggable: true
	  
	  },
	  {
		lat: -8.0624086,
		lng: -34.8980486,
		label: 'B',
		draggable: false,
		title: 'teste2'
	  },
	  {
		lat: -8.0624086,
		lng: -34.8882486,
		label: 'C',
		draggable: true,
		title: 'teste3'
	  }
	]
}

// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
  title: string;
	label?: string;
	draggable: boolean;
  title: string;
}
