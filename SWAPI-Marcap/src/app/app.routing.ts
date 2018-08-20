import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ItemListPeopleComponent } from './components/item-list-people/item-list-people.component';
import { ItemListPlanetComponent } from './components/item-list-planet/item-list-planet.component';
import { ItemListFilmComponent } from './components/item-list-film/item-list-film.component';
import { ItemListSpecieComponent } from './components/item-list-specie/item-list-specie.component';

const routes: Routes = [
  { path: 'list/people', component: ItemListPeopleComponent },
  { path: 'list/planets', component: ItemListPlanetComponent },
  { path: 'list/films', component: ItemListFilmComponent },
  { path: 'list/species', component: ItemListSpecieComponent },

  { path: '**', component: ItemListPeopleComponent }
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload'
});
