import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  @Input('errorCacth') errorCatch!: catchError;
  @Input('loading') loading!: boolean;
  @Input('save') save: boolean = false;

  private readonly _notifier: NotifierService;

  constructor(
    private _ps: PokeService,
    private _notifierService: NotifierService
  ) {
    this._notifier = _notifierService;
  }

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
        this.errorCatch = {
          message: 'Something Happen',
          success: false,
        };
        this._notifier.notify('error', this.errorCatch.message);
      }
    );
  }
}
