import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-querystring',
  templateUrl: './querystring.component.html',
  styles: []
})
export class QuerystringComponent implements OnInit {
  users:string[]=["Mukesh","Shayam","Ram"];
  user:string;
  constructor(private queryString:ActivatedRoute) { 
    this.user = this.users[queryString.snapshot.params["id"]];
  }

  ngOnInit() {
  }

}
