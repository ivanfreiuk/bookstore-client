import { Book } from './book';

export class Wish {
    id: number;
    userId: number; 
    quantity: number;
    createdDate: Date;
    bookId: number;
    book: Book;
    orderId: number;
}