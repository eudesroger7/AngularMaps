import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';


	interface marker {
		lat: number;
		lng: number;
		title?: string;
		icon?: string;
	}


	@Component({
		selector: 'app-root',
		templateUrl: './app.component.html',
		styleUrls: [ './app.component.css' ]
	})

export class AppComponent  {

	sortArray(array) {

		let arraySorted = array.sort(
			function(a, b) { 
				let x = a.title;
				let y = b.title;

				if (x < y) return -1;
				if (x > y) return 1;
				return 0;
			}
		);

		arraySorted[arraySorted.length-1].icon='./assets/img/marker-blue.png';

		return arraySorted;
	}

	formatArray(array) {

		let arrayFormatted = [];

		array.map(function(login, index) {
			arrayFormatted[index] = {
				lat: login.lat*1,
				lng: login.lng*1,
				date: login.date,
				user: login.name,
				icon: './assets/img/marker-red.png'
			}
		});

		return this.sortArray(arrayFormatted);
	}



	getMarkers() {

		const userLogins = [
		    {"lat": "-8.0624086", "lng": "-34.8982486", "name": "Eudes", "id": "2", "date": "2012/12/13"},
		    {"lat": "-8.0623086", "lng": "-34.8982486", "name": "Eudes", "id": "2", "date": "2010/03/13"},
		    {"lat": "-8.0621086", "lng": "-34.8982486", "name": "Eudes", "id": "2", "date": "2020/05/23"},
		    {"lat": "-8.0624086", "lng": "-34.8982186", "name": "Eudes", "id": "2", "date": "2011/12/05"},
		    {"lat": "-8.0624086", "lng": "-34.8962486", "name": "Eudes", "id": "2", "date": "2019/10/03"},
		    {"lat": "-8.0623086", "lng": "-34.8962486", "name": "Eudes", "id": "2", "date": "1920/05/53"},
		    {"lat": "-8.0621086", "lng": "-34.8962486", "name": "Eudes", "id": "2", "date": "1998/10/21"},
		    {"lat": "-8.0624086", "lng": "-34.8962186", "name": "Eudes", "id": "2", "date": "2014/11/13"},
		    {"lat": "-8.0624086", "lng": "-34.8942486", "name": "Eudes", "id": "2", "date": "2013/01/43"},
		    {"lat": "-8.0623086", "lng": "-34.8942486", "name": "Eudes", "id": "2", "date": "2011/10/30"},
		    {"lat": "-8.0621086", "lng": "-34.8942486", "name": "Eudes", "id": "2", "date": "2017/07/27"},
		    {"lat": "-8.0624086", "lng": "-34.8942186", "name": "Eudes", "id": "2", "date": "2011/10/03"}
		];

		return this.formatArray(userLogins);
	}	

	getLatCenter(){
		const position = this.getMarkers();
		return position[position.length-1].lat*1;
	}

	getLngCenter(){
		const position = this.getMarkers();
		return position[position.length-1].lng*1;
	}

	// map initial value
	zoom: number = 23;
	lat: number = this.getLatCenter();
	lng: number = this.getLngCenter();
	markers: marker[] = this.getMarkers();
}
