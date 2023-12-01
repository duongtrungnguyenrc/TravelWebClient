import { User } from "..";

interface LoginResponse extends User {
    accessToken: string;
    tokenType: string;
}

export default LoginResponse;