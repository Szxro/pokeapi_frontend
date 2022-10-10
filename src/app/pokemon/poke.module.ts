import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeRoutingModule } from './poke-routing.module';
import { PokeAllComponent } from './pages/poke-all/poke-all.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SavePokemonsComponent } from './pages/save-pokemons/save-pokemons.component';
import { CoreModule } from '../core/core.module';
import { SearchPokemonComponent } from './pages/search-pokemon/search-pokemon.component';

@NgModule({
  declarations: [
    PokeAllComponent,
    SavePokemonsComponent,
    SearchPokemonComponent,
  ],
  imports: [CommonModule, PokeRoutingModule, ReactiveFormsModule, CoreModule],
})
export class PokeModule {}
