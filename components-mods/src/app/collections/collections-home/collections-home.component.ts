import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

data=[
  {'name':'James','age':23,'job':'Engineer','employed':true},
  {'name':'Andrew','age':24,'job':'Developer','employed':true},
  {'name':'Mike','age':25,'job':'DevOps','employed':true}
];
headers=[
  {'key':'name','label':'Name'},
  {'key':'age','label':'Age'},
  {'key':'job','label':'Job'},
  {'key':'employed','label':'Employment Status'}
];
  constructor() { }

  ngOnInit() {
  }

}
