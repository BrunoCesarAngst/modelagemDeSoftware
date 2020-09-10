interface IPerson {
  name: string;
  address: string;
  phone: string;
  neighbor: string;
  mailbox: number;
  city: string;
  country: string;
  
}

class IPerson {
  name: string;
  address: string;
  phone: string;
  neighbor: string;
  mailbox: number;
  city: string;
  country: string;
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

console.log(IPerson)