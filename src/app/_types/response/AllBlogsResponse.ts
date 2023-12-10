import Blog from "../Blog";

export default class AllBlogsResponse {
    pages: number;
    posts: Blog[];

    constructor() {
        this.pages = 0;
        this.posts = [];
    }
    
}