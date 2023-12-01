export default class Image {
    src: string;
    name: string;

    constructor(src: string, name: string){
        this.src = src;
        this.name = name;
    }
    
    static getEmptyInstance(){
        return new Image("", "")
    }
}
