import Paragraph from "./TourParagraph";

export default class Blog {
    id: number;
    type: string;
    title: string;
    time: string;
    author: string;
    img: string;
    paragraphs: Paragraph[];
    description: string;

    constructor(id: number, type: string, title: string, time: string, author: string, img: string, paragraphs: Paragraph[], description: string) {
        this.id = id;
        this.type = type;
        this.title = title;
        this.time = time;
        this.author = author;
        this.img = img;
        this.paragraphs = paragraphs;
        this.description = description;
    }
}
