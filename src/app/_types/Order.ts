import { Tour, TourHotel } from "./index";

class ContactInfo {
    customerFullName: string;
    customerPhone: string;
    customerEmail: string;
    customerAddress: string;
  
    constructor(
      customerFullName: string,
      customerPhone: string,
      customerEmail: string,
      customerAddress: string
    ) {
      this.customerFullName = customerFullName;
      this.customerPhone = customerPhone;
      this.customerEmail = customerEmail;
      this.customerAddress = customerAddress;
    }
}
  
  
export default class Order {
    id: number;
    orderDate: string;
    adults: number;
    children: number;
    specialRequest: string;
    departDate: string;
    endDate: string;
    paymentMethod: string;
    status: string;
    totalPrice: number;
    tour: Tour;
    contactInfo: ContactInfo;
    hotel: TourHotel;
  
    constructor(
      id: number,
      orderDate: string,
      adults: number,
      children: number,
      specialRequest: string,
      departDate: string,
      endDate: string,
      paymentMethod: string,
      status: string,
      totalPrice: number,
      tour: Tour,
      contactInfo: ContactInfo,
      hotel: TourHotel
    ) {
      this.id = id;
      this.orderDate = orderDate;
      this.adults = adults;
      this.children = children;
      this.specialRequest = specialRequest;
      this.departDate = departDate;
      this.endDate = endDate;
      this.paymentMethod = paymentMethod;
      this.status = status;
      this.totalPrice = totalPrice;
      this.tour = tour;
      this.contactInfo = contactInfo;
      this.hotel = hotel;
    }
}

  