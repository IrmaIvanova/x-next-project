import type { IUser } from "./user.interface";

export interface ITweet {
    id: number;
    text: string;
    author: IUser;
    likes: number,
    retweets: number,
    date: string
}