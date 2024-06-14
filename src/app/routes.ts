import {Routes} from '@angular/router';
import {AnimalComponent} from './animal/animal.component';
import {DetailsComponent} from './details/details.component';

const routeConfig: Routes = [
    {
      path: '',
      component: AnimalComponent,
      title: 'Strona główna',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Szczegóły zwierzęcia',
    },
  ];
  export default routeConfig;