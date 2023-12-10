export default class Message {
    id: number;
    room: number;
    name: string;
    role: string;
    avatar: string;
    message: string;
    time: string;

    constructor(message: string) {
        this.id = -1,
        this.room = -1,
        this.name = "",
        this.role = "",
        this.avatar = "",
        this.message = message;
        this.time = "";
    }
}