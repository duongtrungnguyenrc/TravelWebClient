export default class TourRating {
    id: number;
    username: string;
    email: string;
    ratedDate: string;
    star: number;
    comment: string;
    active: boolean;
    
    constructor(id: number, username: string, email: string, ratedDate: string, star: number, comment: string, active: boolean){
        this.id = id;
        this.username = username;
        this.email = email;
        this.ratedDate = ratedDate;
        this.star = star;
        this.comment = comment;
        this.active = active;
    }

    static getEmptyInstance(){
        return new TourRating(1, "", "", "", 0, "", false)
    }
}

