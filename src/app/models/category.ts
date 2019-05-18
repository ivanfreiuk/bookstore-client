export class Category {
    id: number;
    categoryName: string;

    constructor(categoryName: string = '', id: number = 0) {
        this.id = id;
        this.categoryName = categoryName;
    }
}