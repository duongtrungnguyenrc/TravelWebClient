import Image from "./Image";

export default class Paragraph{
    id: string;
    content: string;
    image: Image;
    layout: number;
    
    constructor(id: string, content: string, image: Image, layout: number){
        this.id = id;
        this.content = content;
        this.image = image;
        this.layout = layout;
    }

    static getEmptyInstance(){
        return new Paragraph("", "", new Image("", ""), 0)
    }
}

