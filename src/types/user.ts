export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type UserFormSchema = {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type UserParam = {
    id:number;
    body: UserFormSchema;
}