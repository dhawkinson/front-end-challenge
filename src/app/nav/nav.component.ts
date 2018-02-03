// the navigation component
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    //  event emitter for page selection
    @Output() pageSelected = new EventEmitter<string>();
    //  onSelect from nav template
    onSelect(page: string) {
        this.pageSelected.emit(page);
    }

  constructor() { }

  ngOnInit() {
  }

}
