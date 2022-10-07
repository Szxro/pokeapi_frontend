import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeResponse } from '../../interfaces/pokeResponse';

@Component({
  selector: 'app-poke-all',
  templateUrl: './poke-all.component.html',
  styles: [],
})
export class PokeAllComponent implements OnInit {
  catchPokemon: PokeResponse[] = [];
  constructor(private _ps: PokeService) {}

  ngOnInit(): void {}

  getAllPokemons(limit: number, offset: number) {
    if (limit <= 0) return;
    if (offset < 0) return;
    this.catchPokemon = [];
    this._ps.getAll(limit, offset).subscribe((x) => {
      if (x.data === null) {
        console.log(x.message);
      } else {
        x.data.map((p) => {
          this.catchPokemon.push({
            name: p.name,
            weight: p.weight,
            height: p.height,
            abilities: p.abilities,
            sprites: p.sprites.other.dream_world.front_default,
            stats: p.stats,
            types: p.types,
          });
        });
      }
    });
  }
}
//notify Angular https://www.npmjs.com/package/notify-angular
