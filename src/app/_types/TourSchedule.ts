export default class TourSchedule {
    id: string;
    time: string;
    content: string;
    
    constructor(id: string, time: string, content: string){
        this.id = id;
        this.time = time;
        this.content = content;
    }

    static getEmptyInstance(){
        return new TourSchedule("1", "", "")
    }
}
