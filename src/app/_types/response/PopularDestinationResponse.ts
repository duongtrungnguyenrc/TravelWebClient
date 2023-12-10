export default class PopularDestinationResponse {
    id: number;
    name: string;
    orderQuantity: number;
    img: string;

    constructor() {
        this.id = -1;
        this.name = "";
        this.orderQuantity = 0;
        this.img = "";
    }
}