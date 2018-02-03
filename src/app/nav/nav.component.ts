// the navigation component
<<<<<<< HEAD
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 8c992c351b23597771d55bd087ab8ab204baa393

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
<<<<<<< HEAD
    //  event emitter for page selection
    @Output() pageSelected = new EventEmitter<string>();
    //  onSelect from nav template
    onSelect(page: string) {
        this.pageSelected.emit(page);
    }
=======
>>>>>>> 8c992c351b23597771d55bd087ab8ab204baa393

  constructor() { }

  ngOnInit() {
  }

}
