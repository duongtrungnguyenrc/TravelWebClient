export default class MessageRequest {
    room: number;
    uid: number;
    role: string;
    message: string;

    constructor(id: number, role: string) {
        this.room = id;
        this.uid = id;
        this.role = role;
        this.message = "";
    }
}