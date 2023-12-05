export default class TourFilter {
    fromPrice: number | null;
    toPrice: number | null;
    star: number | null;
    departDate: string | null;
    endDate: string | null;
    type: string | null;

    constructor(fromPrice: number | null, toPrice: number | null, star: number | null, departDate: string | null, endDate: string | null, type: string | null) {
        this.fromPrice = fromPrice;
        this.toPrice = toPrice;
        this.star = star || null;
        this.departDate = departDate || null;
        this.endDate = endDate || null;
        this.type = type || null;
    }

    static getEmptyInstance() {
        return new TourFilter(null, null, null, null, null, null);
    }
}