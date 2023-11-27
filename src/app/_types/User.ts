interface User {
    id: number;
    email: string;
    address: string;
    fullName: string;
    phone: string;
    roles: string[];
    active: boolean;
}

export default User;