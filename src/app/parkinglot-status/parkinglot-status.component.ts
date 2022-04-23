import { Component, Input } from "@angular/core";

@Component({
	selector: "app-parkinglot-status",
	templateUrl: "./parkinglot-status.component.html",
	styleUrls: ["./parkinglot-status.component.scss"],
})
export class ParkinglotStatusComponent {
	private _status: string;
	private statusToName: Record<string, string> = {
		male: "מלא",
		meat: "מעט",
		pail: "פעיל",
		panui: "פנוי",
		sagur: "סגור",
		unknown: "לא ידוע",
	};
	private statusToColor: Record<string, string> = {
		male: "#cc3232",
		meat: "#e7b416",
		pail: "#2dc937",
		panui: "#99c140",
		sagur: "black",
		unknown: "gray",
	};
	statusDisplayName: string;
	statusColor: string;

	@Input() set status(value: string) {
		this._status = value;
		this.statusDisplayName = this.statusToName[this._status] ?? "לא ידוע";
		this.statusColor = this.statusToColor[this._status] ?? "gray";
	}
}
