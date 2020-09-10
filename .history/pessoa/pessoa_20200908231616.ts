class Person {
  pri name: string;
  pri address: string;
  pri phone: string;
  pri neighbor: string;
  pri mailbox: number;
  pri city: string;
  pri country: string;
  constructor(
    name: string,
    address: string,
    phone: string,
    neighbor: string,
    mailbox: number,
    city: string,
    country: string
  ) {
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.neighbor = neighbor;
    this.mailbox = mailbox
    this.city = city;
    this.country = country
  }
}

console.log(Person)