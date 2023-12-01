export default class CreateBlogPostRequest {
    author: string;
    title: string;
    type: string;
    paragraphs: Paragraph[];
  
    constructor(author: string, title: string, type: string, paragraphs: Paragraph[]){
        this.author = author;
        this.title = title;
        this.type = type;
        this.paragraphs = paragraphs;
    }

    static getEmptyInstance(author?: string) : CreateBlogPostRequest {
        return author ? new CreateBlogPostRequest(author, "", "", []) : new CreateBlogPostRequest("", "", "", []);
    }
}

export class Paragraph {
    order: number;
    content: string;
    imageName: string;
    layout: number;
    hasImage: boolean;

    constructor(order: number, content: string, imageName: string, layout: number, hasImage: boolean){
        this.order = order;
        this.content = content;
        this.imageName = imageName;
        this.layout = layout;
        this.hasImage = hasImage;
    }

    static getEmptyInstance() : Paragraph {
        return new Paragraph(0, "", "", 0, true);
    }
}