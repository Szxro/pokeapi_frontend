import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { Observable } from 'rxjs';
import { DBResponse } from '../../interfaces/dbResponse';
import { PokeResponse } from '../../interfaces/pokeResponse';

@Component({
  selector: 'app-save-pokemons',
  templateUrl: './save-pokemons.component.html',
  styles: [],
})
export class SavePokemonsComponent implements OnInit {
  dbPokemons: PokeResponse[] = [];
  constructor(private _ps: PokeService) {}

  ngOnInit(): void {
    this.getDbPokemons();
  }

  private getDbPokemons() {
    this._ps.getDB().subscribe((x) => {
      if (x.data === null) console.log(x.message);
      x.data.map((x) => {
        this.dbPokemons.push({
          name: x.name,
          weight: x.weight,
          height: x.height,
          sprites: x.pokeSprite.urlSprite,
          abilities: x.abilities,
          stats: JSON.parse(x.stats.stats),
          types: JSON.parse(x.types.types),
        });
      });
    });
  }
}
