import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
} from "@angular/core";
import * as L from "leaflet";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  private map?: L.Map;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [32.07016220603205, 34.77703735851467],
      zoom: 13,
    });

    const tiles = L.tileLayer(
      "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        minZoom: 3,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }
    );

    tiles.addTo(this.map);
  }
}
