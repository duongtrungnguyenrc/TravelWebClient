interface Response {
    code: Number;
    status: boolean;
    message: string;
    data: [] | {} | string | null;
}

export default Response;