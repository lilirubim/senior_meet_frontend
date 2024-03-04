import { User } from "./user.model";


export interface Group{
    id: number;
    title: string;
    description: string;
    rules: string;
    photosUrl: string;
    
    user: User;
}

