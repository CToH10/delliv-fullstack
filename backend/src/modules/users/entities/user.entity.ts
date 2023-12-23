import { address } from "@prisma/client";
import { Exclude } from "class-transformer";
import { randomUUID } from "crypto";

export class User {
    readonly id: string;
    username: string;
    email: string;
    fullName: string;
    admin: boolean;
    address: address;
    
    @Exclude()
    password: string;

    constructor (){
        this.id = randomUUID();
    }
}
