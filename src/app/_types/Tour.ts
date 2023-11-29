import TourDate from "./TourDate";
import Paragraph from "./TourParagraph";
import TourHotel from "./TourHotel";
import TourSchedule from "./TourSchedule";

export default class Tour {
    id: number;
    type: string;
    groupTitle: string;
    img : string;
    name : string;
    price : number;
    ratedStar : number;
    startFrom: number;
    location : string;
    maxPeople : number;
    duration : number;
    vehicle: string;
    depart: string;
    tourDate: TourDate[];
    currentPeople: number;
    overview: {
        id: number,
        backgroundImage: string;
        paragraphs: Paragraph[];
    };
    hotels: TourHotel[];
    schedules: TourSchedule[];
    ratingAcceptance: boolean;

    constructor(
        id: number,
        type: string,
        groupTitle: string,
        img: string,
        name: string,
        price: number,
        ratedStar: number,
        startFrom: number,
        location: string,
        maxPeople: number,
        duration: number,
        vehicle: string,
        depart: string,
        tourDate: TourDate[],
        currentPeople: number,
        overview: {
            id: number,
            backgroundImage: string;
            paragraphs: Paragraph[];
        },
        hotels: TourHotel[],
        schedules: TourSchedule[],
        ratingAcceptance: boolean
    ) {
        this.id = id;
        this.type = type;
        this.groupTitle = groupTitle;
        this.img = img;
        this.name = name;
        this.price = price;
        this.ratedStar = ratedStar;
        this.startFrom = startFrom;
        this.location = location;
        this.maxPeople = maxPeople;
        this.duration = duration;
        this.vehicle = vehicle;
        this.depart = depart;
        this.tourDate = tourDate;
        this.currentPeople = currentPeople;
        this.overview = overview;
        this.hotels = hotels;
        this.schedules = schedules;
        this.ratingAcceptance = ratingAcceptance;
    }

    static getEmptyInstance(){
        return new Tour(-1 , "", "", "", "", 0, 0, 0, "", 0, 0, "", "", [], 0, {id: -1, backgroundImage: "", paragraphs: []}, [], [], false)
    }
}