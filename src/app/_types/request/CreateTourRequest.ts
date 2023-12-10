import { TourDate, TourParagraph, TourSchedule } from "..";

export default class CreateTourRequest {
    public tour: {
        id: number | null;
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
            id: null,
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
