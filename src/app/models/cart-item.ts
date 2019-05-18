import { Book } from './book';

export class CartItem {
    id: number;
    userId: number;
    quantity: number;
    isOrdered: boolean;
    createdDate: Date;
    bookId: number;
    book: Book;
    orderId: number;
}