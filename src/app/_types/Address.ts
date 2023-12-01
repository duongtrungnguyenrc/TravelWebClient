
interface AddressItem {
    id: number;
    name: string;
}

export default class Address {
    city: AddressItem;
    district: AddressItem;
    ward: AddressItem;
    addressDetail: string;

    constructor(city: AddressItem, district: AddressItem, ward: AddressItem, addressDetail: string) {
        this.city = city;
        this.district = district;
        this.ward = ward;
        this.addressDetail = addressDetail;
    }

    static getEmptyInstance() {
        return new Address(
            {
                id: -1, name: ""
            },
            {
                id: -1, name: ""
            },
            {
                id: -1, name: ""
            },
            ""
        )
    }
}