import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { ParkingLot } from "../interfaces/parkingLot";

@Component({
  selector: "app-parkinglot-details",
  templateUrl: "./parkinglot-details.component.html",
  styleUrls: ["./parkinglot-details.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParkinglotDetailsComponent {
  @Input()
  parkingLot: ParkingLot;

  constructor() {}
}
