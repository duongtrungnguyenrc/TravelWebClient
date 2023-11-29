export default class Weather {
    coord: {
        lon: number,
        lat:  number
    };
    weather: {
        id:  number,
        main: string,
        description: string,
        icon: string
    }[];
    base: string;
    main: {
        temp:  number,
        feels_like:  number,
        temp_min:  number,
        temp_max:  number,
        pressure:  number,
        humidity: number
    };
    visibility:  number;
    wind: {
        speed:  number,
        deg:  number
    };
    rain: {
        "1h":  number
    };
    clouds: {
        all:  number
    };
    dt:  number;
    sys: {
        type:  number,
        id:  number,
        country: string,
        sunrise:  number,
        sunset:  number
    };
    timezone:  number;
    id:  number;
    name: string;
    cod: string
    constructor(
        coord: {
            lon: number,
            lat: number
        },
        weather: {
            id: number,
            main: string,
            description: string,
            icon: string
        }[],
        base: string,
        main: {
            temp: number,
            feels_like: number,
            temp_min: number,
            temp_max: number,
            pressure: number,
            humidity: number
        },
        visibility: number,
        wind: {
            speed: number,
            deg: number
        },
        rain: {
            "1h": number
        },
        clouds: {
            all: number
        },
        dt: number,
        sys: {
            type: number,
            id: number,
            country: string,
            sunrise: number,
            sunset: number
        },
        timezone: number,
        id: number,
        name: string,
        cod: string
    ) {
        this.coord = coord;
        this.weather = weather;
        this.base = base;
        this.main = main;
        this.visibility = visibility;
        this.wind = wind;
        this.rain = rain;
        this.clouds = clouds;
        this.dt = dt;
        this.sys = sys;
        this.timezone = timezone;
        this.id = id;
        this.name = name;
        this.cod = cod;
    }

    static getEmptyInstance(){
        return new Weather(
            { lon: 0, lat: 0 },
            [{ id: 1, main: "", description: "", icon: "" }],
            "",
            {
                temp: 0,
                feels_like: 0,
                temp_min: 0,
                temp_max: 0,
                pressure: 0,
                humidity: 0
            },
            0,
            { speed: 0, deg: 0 },
            { "1h": 0 },
            { all: 0 },
            0,
            { type: 0, id: 1, country: "", sunrise: 0, sunset: 0 },
            0,
            1,
            "",
            ""
        )
    }
}
