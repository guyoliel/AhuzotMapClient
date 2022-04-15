import { Component, OnInit } from "@angular/core";
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
  constructor(private parkingLotsService: ParkingLotsService) {}

  ngOnInit(): void {
    this.parkingLots$ = this.parkingLotsService.getAllParkingLots();
  }
}
