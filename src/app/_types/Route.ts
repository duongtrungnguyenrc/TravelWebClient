export default class Route {
    routeName: string;
    routePath: string;

    constructor(routeName: string, routePath: string) {
        this.routeName = routeName;
        this.routePath = routePath;
    }
    
    static getEmptyInstance(){
        return new Route("", "")
    }
}
