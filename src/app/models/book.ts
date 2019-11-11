import { Author } from './author';
import { Category } from './category';

export class Book {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    mark: number;
    language: string;
    description: string;
    pageSize: number;
    commentsEnabled: boolean;
    authors: Author[];
    categories: Category[];
}