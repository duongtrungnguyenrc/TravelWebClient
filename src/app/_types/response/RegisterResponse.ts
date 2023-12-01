import User from "../User";

export default class RegisterRespomse {
    confirmToken: string;
    user: User;

    constructor(confirmToken: string, user: User) {
        this.confirmToken = confirmToken;
        this.user = user;
    }
}