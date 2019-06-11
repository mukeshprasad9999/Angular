import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styles: []
})
export class StructuralComponent implements OnInit {
  num:number;
  colors:string[];
  alpbabet:string;
  Name:string;
  constructor() {
    this.num = 0;
    this.colors = ["Red","Green","Blue"];
    this.alpbabet = "A";
    this.Name = "Dalda";
   }
  ngOnInit() {
  }

}
