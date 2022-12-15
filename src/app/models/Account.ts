import { User } from "./User";

export interface Account {
    id?: number;
    balance: number;
    type: string;
    user: User;
}