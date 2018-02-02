export class QPLrow {
    public id: number;
    public partNumber: string;
    public revision: string;
    public partName: string;
    public toolDieSetNumber: number;
    public isQualified: boolean;
    public openPo: boolean;
    public jurisdiction: string;
    public classification: string;
    public supplierName: string;
    public supplierCodes: string;
    public ctq: boolean;
    public lastUpdatedBy: string;
    public lastUpdatedDateUtc: Date;
    public qplExpirationDate: Date;
    public uppapStatus: string;
    public uppapExpiresUtc: Date;
    public uppapUpdatedBy: string;
    public uppapUpdatedDateUtc: Date;

    contructor(
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
    ) 
    {
        this.id = id;
        this.partNumber = partNumber;
        this.revision = revision;
        this.partName = partName;
        this.toolDieSetNumber = toolDieSetNumber;
        this.isQualified = isQualified;
        this.openPo = openPo;
        this.jurisdiction = jurisdiction;
        this.classification = classification;
        this.supplierName = supplierName;
        this.supplierCodes = supplierCodes;
        this.ctq = ctq;
        this.lastUpdatedBy = lastUpdatedBy;
        this.lastUpdatedDateUtc = lastUpdatedDateUtc;
        this.qplExpirationDate = qplExpirationDate;
        this.uppapStatus = uppapStatus;
        this.uppapExpiresUtc = uppapExpiresUtc;
        this.uppapUpdatedBy = uppapUpdatedBy;
        this.uppapUpdatedDateUtc = uppapUpdatedDateUtc;
    }
}