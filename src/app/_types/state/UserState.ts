import User from "../User";

export default interface UserState {
    user: User | null,
    accessToken: string,
}