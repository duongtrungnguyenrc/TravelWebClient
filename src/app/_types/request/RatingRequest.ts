export default class RatingRequest {
    tourId: number;
    blogId: number;
    comment: string;
    star: number;

    constructor( tourId: number, blogId: number, comment: string, star: number,) {
        this.tourId = tourId;
        this.blogId = blogId;
        this.comment = comment;
        this.star = star;
    }
}