interface LoginResponse {
    accessToken: string;
    email: string;
    role: string[];
    tokenType: string;
}

export default LoginResponse;