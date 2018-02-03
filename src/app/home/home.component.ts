//  home page component
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title = 'Front-end Coding Challenge';
    subTitle = 'Doug Hawkinson';

    constructor() { }

    ngOnInit() {
    }

}
