export default class RatingRequest {
    tourId: number;
    comment: string;
    star: number;

    constructor( tourId: number, comment: string, star: number,) {
        this.tourId = tourId;
        this.comment = comment;
        this.star = star;
    }
}