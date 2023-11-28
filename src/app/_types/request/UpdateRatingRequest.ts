export default class UpdateRatingRequest {
    id: number;
    comment: string;
    star: number;

    constructor( id: number, comment: string, star: number,) {
        this.id = id;
        this.comment = comment;
        this.star = star;
    }
}