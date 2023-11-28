import TourRating from "../TourRating";

export default class TourRatingsResponse {
    pages : number;
    rates: TourRating[];

    constructor() {
        this.pages = 0;
        this.rates = []
    }
}