import { Author } from './author';
import { Category } from './category';

export class Book {
    id: number;
    title: string;
    price: number;
    language: string;
    description: string;
    authors: Author[];
    categories: Category;
}