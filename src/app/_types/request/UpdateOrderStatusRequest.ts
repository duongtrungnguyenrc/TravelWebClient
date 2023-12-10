export default class UpdateOrderStatusRequest {
    id: number | null;
    status: string;

    constructor() {
        this.id = null;
        this.status = '';
    }
}