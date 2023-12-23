import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  username?: string;

  constructor() {
    this.id = randomUUID();
  }
}