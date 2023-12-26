import { randomUUID } from "crypto";

export class Product {
    readonly id: string;
    name: string
    stock: number
    price: number

    constructor(){
        this.id = randomUUID()
    }
}
