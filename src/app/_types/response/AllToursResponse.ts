import Tour from "../Tour";

export default class AllToursResponse {
    pages: number;
    tours: Tour[];

    constructor(pages: number, tours: Tour[]) {
        this.pages = pages;
        this.tours = tours;
    }
}