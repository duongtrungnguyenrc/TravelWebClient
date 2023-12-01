export default class Blog {
    id: number;
    type: string;
    title: string;
    time: string;
    author: string;
    img: string;

    constructor(id: number, type: string, title: string, time: string, author: string, img: string) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.time = time;
        this.author = author;
        this.img = img;
    }
}
