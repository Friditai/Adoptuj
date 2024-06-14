import { Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Animallocation } from '../animallocation';
import { RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-animal-location',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
    <a [routerLink]="['/details', animallocation.id]"><section class="listing">
      <img
        class="listing-photo"
        [src]="animallocation.photo"
        alt="Photo of {{ animallocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ animallocation.name }}</h2>
      <p class="listing-location">{{ animallocation.city }}, {{ animallocation.gender }}</p>
    </section>
</a>
  `,
  styleUrls: ['./animal-location.component.css'],
})
export class AnimalLocationComponent {
  @Input() animallocation!: Animallocation;

}
