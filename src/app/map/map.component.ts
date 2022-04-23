import { Component, ChangeDetectionStrategy, AfterViewInit, Input } from "@angular/core";
import * as L from "leaflet";
import { Observable } from "rxjs";
import { filter, map, mergeMap } from "rxjs/operators";
import { ParkingLot } from "../interfaces/parkingLot";
import { ComponentFactoryResolver, Injector } from "@angular/core";
import { ParkinglotDetailsComponent } from "../parkinglot-details/parkinglot-details.component";

const iconUrl = "assets/parkIcon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = L.icon({
	iconUrl,
	shadowUrl,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	tooltipAnchor: [16, -28],
	shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
	selector: "app-map",
	templateUrl: "./map.component.html",
	styleUrls: ["./map.component.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
	private map: L.Map;

	@Input()
	points: Observable<ParkingLot[]>;

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

		this.points
			.pipe(
				mergeMap((item) => item),
				filter((parkingLot) => !!parkingLot.location),
				map((parkingLot) => {
					const marker = L.marker([parkingLot.location.coordinates[0], parkingLot.location.coordinates[1]]);
					const popUpComponent = this.componentResolver
						.resolveComponentFactory(ParkinglotDetailsComponent)
						.create(this.injector);
					popUpComponent.instance.parkingLot = parkingLot;
					popUpComponent.changeDetectorRef.detectChanges();
					marker.bindPopup(popUpComponent.location.nativeElement);
					return marker;
				})
			)
			.subscribe((marker) => marker.addTo(this.map));
	}
}
