export default class UpdatePasswordRequest {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;

    constructor() {
        this.oldPassword = "";
        this.newPassword = "";
        this.confirmPassword = "";
    }

    static getEmptyInstance() : UpdatePasswordRequest {
        return new UpdatePasswordRequest();
    }
}