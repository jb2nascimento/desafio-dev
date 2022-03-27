export interface ResponseApi<T> {
    code: number;
    message: string;
    details: T
}