import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.css']
})

export class MapComponent {

	public resources: any = {
		zoom: 20,
		lat: this.getLocalCenter().lat,
		lng: this.getLocalCenter().lng,
		markers: this.getMarkers()
	};

	public getMarkers() {
		let places;

		places = [
			{ lat: "-8.0624086", lng: "-34.8982486", date: "2012-12-13" },
			{ lat: "-8.0623086", lng: "-34.8982486", date: "2010-03-13" },
			{ lat: "-8.0621086", lng: "-34.8982486", date: "2020-05-23" },
			{ lat: "-8.0624086", lng: "-34.8982186", date: "2011-12-05" },
			{ lat: "-8.0624086", lng: "-34.8962486", date: "2019-10-03" },
			{ lat: "-8.0623086", lng: "-34.8962486", date: "1920-05-53" },
			{ lat: "-8.0621086", lng: "-34.8962486", date: "1998-10-21" },
			{ lat: "-8.0624086", lng: "-34.8962186", date: "2014-11-13" },
			{ lat: "-8.0624086", lng: "-34.8942486", date: "2013-01-43" },
			{ lat: "-8.0623086", lng: "-34.8942486", date: "2011-10-30" },
			{ lat: "-8.0621086", lng: "-34.8942486", date: "2017-07-27" },
			{ lat: "-8.0624086", lng: "-34.8942186", date: "2011-10-03" }
		];

		if (places.length == 0) {
			const erro = [{
				lat: 0,
				lng: 0,
				date: null,
				user: null,
				icon: null
			}];
			return (erro);
		} else {
			return this.sortArray(places);
		}

	}

	public sortArray(array) {
		let arraySorted = array.sort(
			function (current, next) {
				if (current.date < next.date) return -1;
				if (current.date > next.date) return 1;
				return 0;
			}
		);
		return this.formatArray(arraySorted);
	}

	public formatArray(array) {

		let arrayFormatted = [];

		array.map(function (login, index) {
			arrayFormatted[index] = {
				lat: login.lat * 1,
				lng: login.lng * 1,
				date: moment(login.date).format('DD/MM/YYYY'),
				user: login.name,
				icon: './assets/img/marker-gray.png'
			}
		});
		arrayFormatted[arrayFormatted.length - 1].icon = './assets/img/marker-blue.png';
		return arrayFormatted;
	}

	public getLocalCenter() {
		const centerLocal = this.getMarkers();
		return {
			lat: parseFloat(centerLocal[centerLocal.length - 1].lat),
			lng: parseFloat(centerLocal[centerLocal.length - 1].lng)
		}
	}

	constructor() { }

}
