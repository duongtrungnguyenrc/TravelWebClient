
export interface HotelRoom {
    id: string;
    type: string;
    price: number;
}

export default class TourHotel{
    id: number;
    name: string;
    address: string;
    rooms: HotelRoom[];
    illustration: string;

    constructor(id: number, name: string, address: string, rooms: HotelRoom[], illustration: string) {
        this.id = id;
        this.name = name; this.address = address;
        this.rooms = rooms;
        this.illustration = illustration;
    }

    static getEmptyInstance() : TourHotel {
        return new TourHotel(-1, "", "", [], "");
    }
}