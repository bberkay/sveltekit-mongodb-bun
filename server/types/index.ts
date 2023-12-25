/**
 * Enum for the type of the message that is sent to the WebSocket server.
 */
export enum MessageType{
    CurrentMessages = "CurrentMessages",
    NewMessage = "NewMessage"
}

/**
 *  Type for the data that is sent in the message
 */
export type Message = {
    _id: string;
    senderId: string;
    receiverId: string;
    content: string;
    sentDate: Date;
}

/**
 * Type for the data that is sent in the url
 * @example { _id: "1", name: "John", avatar: "https://..." }
 */
export interface User {
    _id: string;
    name: string;
    avatar: string;
    lastMessage?: string;
}