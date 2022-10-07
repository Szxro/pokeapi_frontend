import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokeRoutingModule } from './poke-routing.module';
import { PokeAllComponent } from './pages/poke-all/poke-all.component';
import { FormsModule } from '@angular/forms';
import { SavePokemonsComponent } from './pages/save-pokemons/save-pokemons.component';

@NgModule({
  declarations: [PokeAllComponent, SavePokemonsComponent],
  imports: [CommonModule, PokeRoutingModule, FormsModule],
})
export class PokeModule {}
