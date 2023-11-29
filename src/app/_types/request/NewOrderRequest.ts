 export interface ContactInfo {
    customerFullName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
}

export default class NewOrderRequest {
   amount: number;
   adults: number;
   children?: number;
   paymentMethod: string;
   tourDateId: number;
   hotelId?: number;
   roomType?: string;
   contactInfo: ContactInfo;
   specialRequest?: string;

    constructor(ammount: number, adults: number, children: number, paymentMethod: string, tourDateId: number, specialRequest: string, contactInfo: ContactInfo, hotelId?: number, roomType?: string) {
        this.amount = ammount;
        this.adults = adults;
        this.children = children;
        this.paymentMethod = paymentMethod;
        this.tourDateId = tourDateId;
        this.specialRequest = specialRequest;
        this.contactInfo = contactInfo;
        this.hotelId = hotelId;
        this.roomType = roomType;
    }

    static getEmptyInstance() {
        return new NewOrderRequest(0, 0, 0, "", -1, "",
            {
                customerFullName: "",
                customerPhone: "",
                customerEmail: "",
                customerAddress: "",
            }, 
        )
    }

    static checkRequireInformation(instance: NewOrderRequest): boolean {        
        console.log(instance);
        
        for (const key in instance) {
            if (instance.hasOwnProperty(key) && key != "hotelId" && key != "roomType" && key != "children" && key != "specialRequest" && key != "amount") {                
                const value = instance[key as keyof NewOrderRequest];
                if (typeof value === 'string' && (!value || value.trim().length === 0)) {
                    return false;
                }
                else if(typeof value === "number" && (!value || value === 0)) {
                    return false;
                }
            }
        }
        return true;
    }    
}