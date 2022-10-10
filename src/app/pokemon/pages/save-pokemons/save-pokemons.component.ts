import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeResponse } from '../../interfaces/pokeResponse';
import { catchError } from '../../interfaces/errorCatch';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-save-pokemons',
  templateUrl: './save-pokemons.component.html',
  styles: [],
})
export class SavePokemonsComponent implements OnInit {
  loading!: boolean;
  errorCatch: boolean = false;
  dbPokemons: PokeResponse[] = [];
  errorList!: catchError;
  constructor(private _ps: PokeService, private _notifier: NotifierService) {}

  ngOnInit(): void {
    this.getDbPokemons();
  }

  private getDbPokemons() {
    this._ps.getDB().subscribe(
      (x) => {
        if (x.data === null) {
          this._notifier.notify('error', x.message);
        } else {
          this.loading = true;
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
          this.loading = false;
        }
      },
      (err) => {
        this.errorList = {
          message:
            'Failed to Load, see if you have internet connection or you are connected to the DB',
          success: false,
        };
        this._notifier.notify('error', this.errorList.message);
      }
    );
  }
}
