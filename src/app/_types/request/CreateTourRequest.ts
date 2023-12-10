import { TourDate, TourParagraph, TourSchedule } from "..";

export default class CreateTourRequest {
    public tour: {
        name: string;
        vehicle: string;
        tourType: string;
        depart: string;
        destination: string;
        tourDate: TourDate[];
        schedules: TourSchedule[];
        hotelIds: number[];
        paragraphs: TourParagraph[];
    };
    images: File[];

    constructor() {
        this.tour = {
            name: '',
            vehicle: '',
            tourType: '',
            depart: '',
            destination: '',
            tourDate: [],
            schedules: [],
            hotelIds: [],
            paragraphs: [],
        };
        this.images = [];
    }
    
    static getEmptyInstance() : CreateTourRequest {
        return new CreateTourRequest();
    }
 }
