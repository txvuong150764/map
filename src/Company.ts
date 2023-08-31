import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable{
  name: String;
  catchPhrase: String;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1> Company Name: ${this.name} </h1>
        <h3> Catch Phrase: ${this.catchPhrase} </h3>
      </div>    
    `
  }
}