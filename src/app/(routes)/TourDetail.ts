interface TourDetail {
    id : string;
    name : string;
    adultPrice : number;
    childPrice: number;
    vehical: string;
    depart: string;
    destination : string;
    departDate : Date;
    endData : Date;
    maxPeople : number;
    currentPeople : number;
    img : string;
    schedule : [];
    oders : [];
    rates : [];
}

export default TourDetail;