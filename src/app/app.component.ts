import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Observable } from "rxjs";
import { ParkingLot } from "./interfaces/parkingLot";
import { ParkingLotsService } from "./services/parking-lots.service";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	parkingLots$: Observable<ParkingLot[]>;

	constructor(
		private parkingLotsService: ParkingLotsService,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.matIconRegistry.addSvgIcon("waze", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/waze.svg"));
	}

	ngOnInit(): void {
		this.parkingLots$ = this.parkingLotsService.getAllParkingLots();
	}
}
