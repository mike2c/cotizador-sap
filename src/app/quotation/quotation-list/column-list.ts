export const QUOTATION_COLUMNS: QuotationRecord[] = [
    {
        name: 'docNum',
        title: 'N° Documento',
        order: true,
        filter: true,
        filterType: 'text',
    },
    {
        name: 'cardcode',
        title: 'Cliente',
        order: true,
        filter: true,
        filterType: 'text',
    },
    {
        name: 'cardName',
        title: 'Nombre',
        order: true,
        filter: true,
        filterType: 'text',
    },
    {
        name: 'docDate',
        title: 'Fecha Documento',
        order: true,
        filter: true,
        filterType: 'date',
    },
    {
        name: 'docStatus',
        title: 'Estado',
        order: true,
        filter: true,
        filterType: 'text',
    },
    {
        name: 'docCur',
        title: 'Moneda',
        order: true,
        filter: true,
        filterType: 'text',
    },
    {
        name: 'docTotal',
        title: 'Monto Total',
        order: false,
        filter: false,
        filterType: 'number',
    },
]

export interface QuotationRecord {
    name: string
    title: string
    order: boolean
    filter: boolean
    filterType: 'text'|'date'|'number'
}