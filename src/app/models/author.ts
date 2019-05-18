export class Author {
    id: number;
    authorName: string;

    constructor(authorName: string='', id: number=0) {
        this.id = id;
        this.authorName = authorName;        
    }
}