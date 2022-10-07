import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeAllComponent } from './pages/poke-all/poke-all.component';
import { SavePokemonsComponent } from './pages/save-pokemons/save-pokemons.component';

const routes: Routes = [
  {
    path: 'pokemon',
    children: [
      {
        path: 'pokeAll',
        component: PokeAllComponent,
      },
      {
        path: 'savePokemons',
        component: SavePokemonsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeRoutingModule {}
