import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ParkingLot } from "../interfaces/parkingLot";
import { environment } from "src/environments/environment";

@Injectable({
	providedIn: "root",
})
export class ParkingLotsService {
	constructor(private http: HttpClient) {}

	getAllParkingLots(): Observable<ParkingLot[]> {
		return this.http.get<ParkingLot[]>(`${environment.mapServerApiUrl}/parking_lots/get_all_lots`);
	}
}
