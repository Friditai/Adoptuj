import { Injectable } from '@angular/core';
import { Animallocation } from './animallocation';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  readonly baseUrl = 'assets/images';


  animallocationList: Animallocation[] = [
    {
    id: 9999,
  name: 'Puszek',
  city: 'Gdańsk',
  species: 'pies',
  gender: 'samiec',
  photo: `${this.baseUrl}/dog.jpg`,
  age: 5,
  adoptionStatus: false,

  },
  {
    id: 10000,
    name: 'Mia',
    city: 'Warszawa',
    species: 'kot',
    gender: 'samica',
    photo: `${this.baseUrl}/cat.jpg`,
    age: 2,
    adoptionStatus: true,
  },
  {
    id: 10001,
    name: 'Burek',
    city: 'Kraków',
    species: 'pies',
    gender: 'samiec',
    photo: `${this.baseUrl}/dog.jpg`,
    age: 3,
    adoptionStatus: false,
  },
  {
    id: 10002,
    name: 'Zuzia',
    city: 'Poznań',
    species: 'kot',
    gender: 'samica',
    photo: `${this.baseUrl}/cat.jpg`,
    age: 1,
    adoptionStatus: true,
  },
  {
    id: 10003,
    name: 'Azor',
    city: 'Łódź',
    species: 'pies',
    gender: 'samiec',
    photo: `${this.baseUrl}/dog.jpg`,
    age: 4,
    adoptionStatus: false,
  },
  {
    id: 10004,
    name: 'Mruczek',
    city: 'Wrocław',
    species: 'kot',
    gender: 'samiec',
    photo: `${this.baseUrl}/cat.jpg`,
    age: 5,
    adoptionStatus: true,
  },
  {
    id: 10005,
    name: 'Reksio',
    city: 'Szczecin',
    species: 'pies',
    gender: 'samiec',
    photo: `${this.baseUrl}/dog.jpg`,
    age: 6,
    adoptionStatus: false,
  },
  {
    id: 10006,
    name: 'Łatka',
    city: 'Katowice',
    species: 'kot',
    gender: 'samica',
    photo: `${this.baseUrl}/cat.jpg`,
    age: 3,
    adoptionStatus: false,
  },
  {
    id: 10007,
    name: 'Felek',
    city: 'Lublin',
    species: 'pies',
    gender: 'samiec',
    photo: `${this.baseUrl}/dog.jpg`,
    age: 2,
    adoptionStatus: false,
  },
  {
    id: 10008,
    name: 'Pusia',
    city: 'Rzeszów',
    species: 'kot',
    gender: 'samica',
    photo: `${this.baseUrl}/cat.jpg`,
    age: 4,
    adoptionStatus: false,
  },
];

getAllAnimalLocations(): Animallocation[] {
  return this.animallocationList;
}
getAnimalLocationById(id: number): Animallocation | undefined {
  return this.animallocationList.find((animallocation) => animallocation.id === id);
}

  constructor() { }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Wypełniono formularz adopcji: imię: ${firstName}, nazwisko: ${lastName}, email: ${email}.`,
    );
  }
}
