import { Point } from "geojson";

export interface ParkingLot {
  name: string;
  lastUpdateTime: Date;
  location: Point;
  status: string;
  url: string;
}
