class Person {
  private name: string;
  private address: string;
  private phone: string;
  private neighbor: string;
  private mailbox: number;
  private city: string;
  private country: string;
  constructor(
    theName: string,
    address: string,
    phone: string,
    neighbor: string,
    mailbox: number,
    city: string,
    country: string
  ) {
    this.name = theName;
    this.address = address;
    this.phone = phone;
    this.neighbor = neighbor;
    this.mailbox = mailbox
    this.city = city;
    this.country = country
  }
}

console.log(Person)