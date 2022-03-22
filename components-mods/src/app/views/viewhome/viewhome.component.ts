import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-viewhome",
  templateUrl: "./viewhome.component.html",
  styleUrls: ["./viewhome.component.css"],
})
export class ViewhomeComponent implements OnInit {
  stats = [
    { value: 22, label: "# of Users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "Satisfaction Score" },
  ];
  constructor() {}

  ngOnInit() {}
}
