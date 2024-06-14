import {Component} from '@angular/core';
import { AnimalComponent } from './animal/animal.component';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimalComponent, RouterModule, RouterLink, RouterOutlet],
  template: `
    
    <main>
      <a [routerLink]="['/']"><header class="brand-name">
        <!-- <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" /> -->
        <h1>Adoptuj</h1>
      </header>
      </a>
      <section class="content">
      <router-outlet></router-outlet>
      </section>
    </main>
  
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zwierzęta';
}
