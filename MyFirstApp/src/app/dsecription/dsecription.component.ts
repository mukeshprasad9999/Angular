import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dsecription',
  templateUrl: './dsecription.component.html',
  styles: []
})
export class DsecriptionComponent implements OnInit {
  progressive:string;
  native:string;
  desktop:string;
  constructor() { 
    this.progressive = 'Use modern web platform capabilities to deliver app-like experiences. High performance, offline, and zero-step installation.';
    this.native = 'Build native mobile apps with strategies from Cordova, Ionic, or NativeScript.';
    this.desktop = 'Create desktop-installed apps across Mac, Windows, and Linux using the same Angular methods you have learned for the web plus the ability to access native OS APIs.';
  }

  ngOnInit() {
  }

}
