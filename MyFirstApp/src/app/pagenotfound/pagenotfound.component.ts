import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
  <div class="alert alert-danger">
  <strong>Opps!</strong> Requested page not found.
  </div>
  `,
  styles: []
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
