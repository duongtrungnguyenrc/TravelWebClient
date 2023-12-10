import Message from "../Message";

export default class AllMessagesResponse {
    roomId: number;
    avatar: string;
    name: string;
    newestMessage: Message;

    constructor() {
        this.roomId = -1;
        this.avatar = "";
        this.name = "";
        this.newestMessage = new Message ("");
    }
}