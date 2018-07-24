import { Component } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})

export class AppComponent  {

	resources = {
		zoom: 20,
		lat: this.getLocalCenter()[0],
		lng: this.getLocalCenter()[1],
		markers: this.getMarkers()
	};

	getMarkers() {
		let userLogins;
		
		userLogins = [
		    {"lat": "-8.0624086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2012/12/13"},
		    {"lat": "-8.0623086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2010/03/13"},
		    {"lat": "-8.0621086", "lng": "-34.8982486", "name": "Eudes Roger", "id": "2", "date": "2020/05/23"},
		    {"lat": "-8.0624086", "lng": "-34.8982186", "name": "Eudes Roger", "id": "2", "date": "2011/12/05"},
		    {"lat": "-8.0624086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "2019/10/03"},
		    {"lat": "-8.0623086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "1920/05/53"},
		    {"lat": "-8.0621086", "lng": "-34.8962486", "name": "Eudes Roger", "id": "2", "date": "1998/10/21"},
		    {"lat": "-8.0624086", "lng": "-34.8962186", "name": "Eudes Roger", "id": "2", "date": "2014/11/13"},
		    {"lat": "-8.0624086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2013/01/43"},
		    {"lat": "-8.0623086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2011/10/30"},
		    {"lat": "-8.0621086", "lng": "-34.8942486", "name": "Eudes Roger", "id": "2", "date": "2017/07/27"},
		    {"lat": "-8.0624086", "lng": "-34.8942186", "name": "Eudes Roger", "id": "2", "date": "2011/10/03"}
		];

		//userLogins = [];

		if(userLogins.length == 0){
			const erro = [{
				lat: 0,
				lng: 0,
				date: null,
				user: null,
				icon: null
			}];
			return(erro);
		} else {
			return this.sortArray(userLogins);
		}
		
	}

	sortArray(array) {
		let arraySorted = array.sort(
			function(current, next) {
				if (current.date < next.date) return -1;
				if (current.date > next.date) return 1;
				return 0;
			}
		);		
		return this.formatArray(arraySorted);
	}

	formatArray(array) {

		let arrayFormatted = [];

		array.map(function(login, index) {
			arrayFormatted[index] = {
				lat: login.lat*1,
				lng: login.lng*1,
				date: login.date,
				user: login.name,
				icon: './assets/img/marker-gray.png'
			}
		});
		arrayFormatted[arrayFormatted.length-1].icon='./assets/img/marker-blue.png';
		return arrayFormatted;
	}

	getLocalCenter(){
		const centerLocal = this.getMarkers();
		return [
			centerLocal[centerLocal.length-1].lat*1,
			centerLocal[centerLocal.length-1].lng*1
		];
	}
}
