import Blog from "../Blog";

export default class AllBlogsResponse {
    pages: number;
    posts: Blog[];

    constructor(pages: number, posts: Blog[]) {
        this.pages = pages;
        this.posts = posts;
    }
}