import TourDate from "./TourDate";
import Paragraph from "./TourParagraph";
import TourHotel from "./TourHotel";

interface Tour {
    id: string;
    type?: string;
    groupTitle?: string;
    img : string;
    name : string;
    price : number;
    ratedStar : number;
    location : string;
    maxPeople : number;
    duration : number;
    vehicle?: string;
    depart?: string;
    tourDate?: TourDate[];
    currentPeople?: number;
    blog?: {
        id: string,
        backgroundImage: string;
        paragraphs: Paragraph[];
    };
    hotel?: TourHotel[];
}
export default Tour;