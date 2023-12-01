export default class User {
    id: number;
    email: string;
    address: string;
    fullName: string;
    phone: string;
    roles: string[];
    active: boolean;
    
    constructor(id: number, email: string, address: string, fullName: string, phone: string, roles: string[], active: boolean){
        this.id = id;
        this.email = email;
        this.address = address;
        this.fullName = fullName;
        this.phone = phone;
        this.roles = roles;
        this.active = active;
    }

    static getEmptyInstance(){
        return new User(1, "", "", "", "", [], false)
    }
}
