class Person {
  protected name: string;
  protected address: string
  protected phone: string
  protected neighbor: string
  protected mailbox: number
  protected city: string
  protected country: string
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

co