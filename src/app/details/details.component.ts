import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AnimalsService} from '../animals.service';
import {Animallocation} from '../animallocation';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `<article>
  <img
    class="listing-photo"
    [src]="animallocation?.photo"
    alt="Photo of {{ animallocation?.name }}"
    crossorigin
  />
  <section class="listing-description">
    <h2 class="listing-heading">{{ animallocation?.name }}</h2>
    <p class="listing-location">{{ animallocation?.city }}, {{ animallocation?.gender }}</p>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">Szczegóły zwierzęcia</h2>
    <ul>
      <li>Gatunek: {{ animallocation?.species }}</li>
      <li>Wiek: {{ animallocation?.age }}</li>
      <li>Adoptowany: {{ animallocation?.adoptionStatus }}</li>
    </ul>
  </section>
  <section class="listing-apply">
        <h2 class="section-heading">Wypełnij formularz adopcji</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">Imię</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Nazwisko</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Wyślij</button>
        </form>
      </section>
</article>
    
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  animalsService = inject(AnimalsService);
  animallocation: Animallocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });
  
  constructor() {
      const animallocationId = Number(this.route.snapshot.params['id']);
      this.animallocation = this.animalsService.getAnimalLocationById(animallocationId);
  }

  submitApplication() {
    this.animalsService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}
