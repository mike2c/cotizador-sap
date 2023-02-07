export interface CotizacionDTO {
    docStatus: string;
    docEntry: number;
    docNum: number;
    cardcode: string;
    cardName: string;
    docCur: string;
    slpCode: number;
    discPrcnt: number;
    docTotal: number;
    docDate: Date;
    docDueDate: Date;
    taxDate: Date;
    reqDate: Date;
    comments: string;
}