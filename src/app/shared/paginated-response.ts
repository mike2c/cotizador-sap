export class PaginatedResponse<T> {
    data : Array<T>;
    currentPage: number;
    pageSize: number;
    totalRecords: number;

    contructor(data : Array<T>) {
        this.data = data;
    }
}