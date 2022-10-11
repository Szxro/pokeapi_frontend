import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokeAllComponent } from './pages/poke-all/poke-all.component';
import { SavePokemonsComponent } from './pages/save-pokemons/save-pokemons.component';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PokeAllComponent,
      },
      {
        path: 'savePokemons',
        component: SavePokemonsComponent,
      },
      {
        path: 'searchPokemon',
        component: SearchPokemonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokeRoutingModule {}
