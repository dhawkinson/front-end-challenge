import { Component, OnInit } from '@angular/core';

import { GetDataService } from './services/get.data.service';


// the QPL page component
@Component({
  selector: 'app-qpl',
  templateUrl: './qpl.component.html',
  styleUrls: ['./qpl.component.css'],
  providers: [GetDataService]
})

export class QplComponent implements OnInit {

    data: {
        id: number,
        partNumber: string,
        revision: string,
        partName: string,
        toolDieSetNumber: number,
        isQualified: boolean,
        openPo: boolean,
        jurisdiction: string,
        classification: string,
        supplierName: string,
        supplierCodes: string,
        ctq: boolean,
        lastUpdatedBy: string,
        lastUpdatedDateUtc: Date,
        qplExpirationDate: Date,
        uppapStatus: string,
        uppapExpiresUtc: Date,
        uppapUpdatedBy: string,
        uppapUpdatedDateUtc: Date
    }[] = [];

    constructor(private getDataService: GetDataService) {}

    ngOnInit() {
        this.data = this.getDataService.data;
    }

}
