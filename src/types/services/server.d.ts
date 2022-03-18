import { AxiosInstance } from 'axios';
export declare interface Server {
    api: AxiosInstance;
    getBook(book_id: string): LM_Book;
}