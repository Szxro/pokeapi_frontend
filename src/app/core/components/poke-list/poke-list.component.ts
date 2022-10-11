import { Component, Input, OnInit } from '@angular/core';
import { PokeResponse } from '../../../pokemon/interfaces/pokeResponse';
import { catchError } from '../../../pokemon/interfaces/errorCatch';
import { PokeService } from '../../../pokemon/services/poke.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styles: [],
})
export class PokeListComponent implements OnInit {
  @Input('pokeList') pokeList: PokeResponse[] = [];
  errorCatch!: catchError;
  @Input('loading') loading!: boolean;
  @Input('save') save: boolean = false;
  @Input('delete') delete: boolean = false;

  constructor(private _ps: PokeService, private _notifier: NotifierService) {}

  ngOnInit(): void {}

  getName(arg: string) {
    this._ps.saveByName(arg).subscribe(
      (x) => {
        if (x.data == null) {
          this.loading = false;
          this.errorCatch = {
            message: x.message,
            success: x.success,
          };
          this._notifier.notify('error', x.message);
        } else {
          this._notifier.notify('success', 'The Pokemon was saved');
        }
      },
      (err) => {
        this.loading = true;
        this.errorCatch = {
          message: 'Something Happen',
          success: false,
        };
        this._notifier.notify('error', this.errorCatch.message);
      }
    );
  }
  deletePokemon(name: string) {
    this._ps.deleteByName(name).subscribe(
      (x) => {
        if (x.data == null) {
          this._notifier.notify('error', x.message);
        } else {
          this._notifier.notify('success', 'Pokemon Deleted, refresh the page');
        }
      },
      (err) => {
        this._notifier.notify('error', 'Something Happen');
      }
    );
  }
}
