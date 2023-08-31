import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class User implements Mappable{
  name: String;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `<h1>User name: ${this.name}</h1>`;
  }
}