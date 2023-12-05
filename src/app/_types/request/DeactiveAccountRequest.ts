export default class DeactiveAccountRequest {
    password: string;
    status: boolean;

    constructor() {
        this.password = "";
        this.status = false;
    }
}