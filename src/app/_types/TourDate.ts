export default class TourDate{
    id: number;
    departDate: string;
    endDate: string;
    type: string;
    duration: number;
    adultPrice: number;
    childPrice: number;

    constructor(id: number, departDate: string, endDate: string, type: string, duration: number, adultPrice: number, childPrice: number) {
        this.id = id;
        this.departDate = departDate;
        this.endDate = endDate;
        this.type = type;
        this.duration = duration;
        this.adultPrice = adultPrice;
        this.childPrice = childPrice;
    }

    static getEmptyInstance(){
        return new TourDate(-1, "", "", "", 0, 0, 0)
    }
}
