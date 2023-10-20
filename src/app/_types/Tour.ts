import TourDate from "./TourDate";
import Paragraph from "./TourParagraph";
import TourHotel from "./TourHotel";
import TourSchedule from "./TourSchedule";

interface Tour {
    id: string;
    type?: string;
    groupTitle?: string;
    img : string;
    name : string;
    price : number;
    ratedStar : number;
    startFrom: number;
    location : string;
    maxPeople : number;
    duration : number;
    vehicle?: string;
    depart?: string;
    tourDate?: TourDate[];
    currentPeople?: number;
    overview?: {
        id: string,
        backgroundImage: string;
        paragraphs: Paragraph[];
    };
    hotel?: TourHotel[];
    schedules?: TourSchedule[];
}
export default Tour;