import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, map, mergeMap, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Place } from "../interfaces/places";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  constructor(private http: HttpClient) {}

  getPlaces(value: string): Observable<Place[]> {
    return this.http
      .get<any[]>(
        `${environment.mapServerApiUrl}/places/search_places?query=${value}`
      )
      .pipe(
        map((places) => {
          return places.map<Place>((item) => ({
            displayName: item.display_name,
          }));
        })
      );
  }
}
