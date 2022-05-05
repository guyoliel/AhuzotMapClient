import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Place } from "../interfaces/place";

@Injectable({
	providedIn: "root",
})
export class PlacesService {
	constructor(private http: HttpClient) {}

	getPlaces(value: string): Observable<Place[]> {
		return this.http.get<any[]>(`${environment.mapServerApiUrl}/places/search_places?query=${value}`).pipe(
			tap((value) => console.log(value)),
			map((places) => {
				return places.map<Place>((item) => ({
					displayName: item.display_name,
					lat: +item.lat,
					lon: +item.lon,
				}));
			})
		);
	}
}
