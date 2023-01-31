export class WebApiResponse<T> {
    
    private _data : Array<T>;
    public get data() : Array<T> {
        return this._data;
    }
    
    constructor(value: Array<T>) {
        this._data = (value) ? value : (new Array<T>());
    }
    
    hasValue = () => !(this.data == null || this.data == undefined) && this._data.length > 0;
}