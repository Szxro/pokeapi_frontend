import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeResponse } from '../../interfaces/pokeResponse';
import { catchError } from '../../interfaces/errorCatch';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-poke-all',
  templateUrl: './poke-all.component.html',
  styles: [],
})
export class PokeAllComponent implements OnInit {
  catchPokemon: PokeResponse[] = [];
  errorList!: catchError;
  cathError: boolean = false;
  loading: boolean = true;
  offset: number = 0;
  constructor(private _ps: PokeService, private _notifier: NotifierService) {}

  ngOnInit(): void {
    this.getAllPokemons(20, 0);
  }

  getAllPokemons(limit: number, offset: number) {
    this.catchPokemon = [];
    this.loading = true;
    this._ps.getAll(limit, offset).subscribe(
      (x) => {
        if (x.data === null) {
          this.loading = true;
          this._notifier.notify('error', x.message);
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
        this.loading = false;
      },
      (err) => {
        this.loading = true;
        this.errorList = {
          message:
            'Something happen, verify your internet connection or your connection to the DB',
          success: false,
        };
        this._notifier.notify('error', this.errorList.message);
      }
    );
  }

  biggerNumber(arg: number): void {
    this.offset += arg;
    if (this.offset < 0) {
      this._notifier.notify('error', 'This is the last page');
      this.offset = 0;
    } else {
      this.getAllPokemons(20, this.offset);
    }
  }
}
//Pnotify Angular https://sciactive.com/pnotify/
