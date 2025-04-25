import { User } from "./user";

export interface NetworkResponse<T>{
    data: T;
}

export interface Support {
    url:string;
    text:string;
}

export interface UserResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages:number;
    data:User[];
    support: Support;
}