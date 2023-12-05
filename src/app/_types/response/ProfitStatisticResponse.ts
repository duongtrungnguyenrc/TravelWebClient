export default class ProfitStatisticsResponse {
    statistic: {
        thisWeek:  number[];
        lastWeek: number[];
    };
    profit: number;
    orderQuantity: number;
    customerQuantity: number;
    monthAverage: number;

    constructor() {
        this.statistic = {
            thisWeek: [],
            lastWeek: []
        };
        this.profit = 0;
        this.orderQuantity = 0;
        this.customerQuantity = 0;
        this.monthAverage = 0;
    }
}