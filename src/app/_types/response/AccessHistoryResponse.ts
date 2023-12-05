export default class AccessHistoryResponse {
    id: number;
    loggedDate: string;
    userDevice: string;
    ipAddress: string;

    constructor(){
        this.id = -1;
        this.loggedDate = "";
        this.userDevice = "";
        this.ipAddress = "";
    }
}