export default class UpdateUserProfileRequest {
    fullName: string;
    address: string;
    phone: string;
    
    constructor(fullName?: string, address?: string, phone?: string) {
        this.fullName = fullName || "";
        this.address = address || "";
        this.phone = phone || "";
    }

    static getEmptyInstance(fullName?: string, address?: string, phone?: string) : UpdateUserProfileRequest {
        return new UpdateUserProfileRequest(fullName, address, phone);
    }
}