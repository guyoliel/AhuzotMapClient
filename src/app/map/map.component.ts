import { Component, ChangeDetectionStrategy, AfterViewInit, Input } from "@angular/core";
import * as L from "leaflet";
import { ParkingLot } from "../interfaces/parkingLot";
import { ComponentFactoryResolver, Injector } from "@angular/core";
import { ParkinglotDetailsComponent } from "../parkinglot-details/parkinglot-details.component";
import { Place } from "../interfaces/place";

const defaultIconRetinaUrl = "assets/marker-icon-2x.png";
const defaultIconUrl = "assets/marker-icon.png";
const defaultShadowUrl = "assets/marker-shadow.png";

const iconUrl = "assets/parkIcon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
	iconUrl: defaultIconUrl,
	shadowUrl: defaultShadowUrl,
	iconRetinaUrl: defaultIconRetinaUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});

const parkingIcon = L.icon({
	iconUrl,
	shadowUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});

@Component({
	selector: "app-map",
	templateUrl: "./map.component.html",
	styleUrls: ["./map.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
	private map: L.Map;
	private _selectedPlace: Place;
	@Input()
	parkingLots: ParkingLot[];

	@Input()
	set selectedPlace(value: Place) {
		this._selectedPlace = value;
		if (value) {
			const selectedMarker = L.marker([this._selectedPlace.lat, this._selectedPlace.lon]);
			selectedMarker.options.icon = iconDefault;
			selectedMarker.addTo(this.map);
			this.map.flyTo([this._selectedPlace.lat, this._selectedPlace.lon], 16);
		}
	}

	constructor(private componentResolver: ComponentFactoryResolver, private injector: Injector) {}

	ngAfterViewInit(): void {
		this.initMap();
	}

	private initMap(): void {
		this.map = L.map("map", {
			center: [32.07016220603205, 34.77703735851467],
			zoom: 13,
		});

		const tiles = L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
			maxZoom: 20,
			minZoom: 3,
			subdomains: ["mt0", "mt1", "mt2", "mt3"],
		});

		tiles.addTo(this.map);

		const markers = this.parkingLots
			.filter((parkingLot) => !!parkingLot.location)
			.map((parkingLot) => {
				const marker = L.marker([parkingLot.location.coordinates[0], parkingLot.location.coordinates[1]]);
				marker.options.icon = parkingIcon;
				const popUpComponent = this.componentResolver
					.resolveComponentFactory(ParkinglotDetailsComponent)
					.create(this.injector);
				popUpComponent.instance.parkingLot = parkingLot;
				popUpComponent.changeDetectorRef.detectChanges();
				marker.bindPopup(popUpComponent.location.nativeElement);
				return marker;
			});
		markers.forEach((marker) => marker.addTo(this.map));
	}
}
