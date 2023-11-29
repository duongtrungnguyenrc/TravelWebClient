import Image from "./Image";

export default class Paragraph{
    id: string;
    content: string;
    image: Image;
    
    constructor(id: string, content: string, image: Image){
        this.id = id;
        this.content = content;
        this.image = image;
    }

    static getEmptyInstance(){
        return new Paragraph("", "", new Image("", ""))
    }
}

