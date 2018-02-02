import { Component, OnInit } from '@angular/core';

// the QPL page component
@Component({
  selector: 'app-qpl',
  templateUrl: './qpl.component.html',
  styleUrls: ['./qpl.component.css']
})
export class QplComponent implements OnInit {

    /*
    getReportData() {
        return this.http.get('https://exam.net-inspect.com/qpl?offset={offset}&pageSize={pageSize}')
            .map((res: Response) => res.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
    */

  constructor() { }

  ngOnInit() {
  }

}
