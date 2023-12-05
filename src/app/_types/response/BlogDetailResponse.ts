import Blog from "../Blog";

export default class BlogDetailResponse {
    post: Blog | null;
    relevantPosts: Blog[];

    constructor() {
        this.post = null;
        this.relevantPosts = [];
    }
}