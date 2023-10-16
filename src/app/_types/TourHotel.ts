interface TourHotel{
    id: string;
    name: string;
    address: string;
    rooms: {
        id: string;
        type: string;
        price: number;
    };
}

export default TourHotel;