import { Component, inject} from '@angular/core';
import { AnimalLocationComponent } from '../animal-location/animal-location.component';
import { CommonModule } from '@angular/common';
import { Animallocation } from '../animallocation';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animal',
  standalone: true,
  imports: [CommonModule, AnimalLocationComponent],
  template: `
   <section>
      <form>
        <input type="text" placeholder="Filtruj lokalizację zwierzęcia" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Szukaj</button>
      </form>
    </section>
    <section class="results">
      <app-animal-location *ngFor="let animallocation of filteredLocationList"[animallocation]="animallocation"></app-animal-location>
    </section>
  `,
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent {
  
  animallocationList: Animallocation[] = [];

  filteredLocationList: Animallocation[] = [];

  animalsService: AnimalsService = inject(AnimalsService);
  constructor() {
    this.animallocationList = this.animalsService.getAllAnimalLocations();
    this.filteredLocationList = this.animallocationList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.animallocationList;
      return;
    }
    this.filteredLocationList = this.animallocationList.filter((animallocation) =>
      animallocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
  
}
