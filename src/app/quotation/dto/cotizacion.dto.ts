export interface CotizacionDTO {
    cotizacionId: number,
    noDocumento: number,
    fechaDocumento: Date,
    nombre: string,
    estado: string,
    moneda: string,
    montoTotal: number
}