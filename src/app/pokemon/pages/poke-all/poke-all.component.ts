import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { PokeResponse } from '../../interfaces/pokeResponse';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private _ps: PokeService,
    private _fb: FormBuilder,
    private _notifier: NotifierService
  ) {}

  ngOnInit(): void {}

  formSubmit: FormGroup = this._fb.group({
    limit: [, [Validators.required, Validators.min(1)]],
    offset: [, [Validators.required, Validators.min(0)]],
  });

  getAllPokemons(limit: number, offset: number) {
    this.catchPokemon = [];
    this._ps.getAll(limit, offset).subscribe(
      (x) => {
        if (x.data === null) {
          this.loading = false;
          this._notifier.notify('error', x.message);
        } else {
          this.loading = true;
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
          this.loading = false;
        }
      },
      (err) => {
        this.loading = false;
        this.errorList = {
          message:
            'Something happen, verify your internet connection or your connection to the DB',
          success: false,
        };
        this._notifier.notify('error', this.errorList.message);
      }
    );
  }
  getDataForm() {
    if (this.formSubmit.invalid) {
      this.formSubmit.markAllAsTouched();
      return;
    }
    this.getAllPokemons(
      this.formSubmit.get('limit')?.value,
      this.formSubmit.get('offset')?.value
    );
  }

  checkInputs(value: string) {
    return (
      this.formSubmit.controls[value].errors &&
      this.formSubmit.controls[value].touched
    );
  }

  get limitErrors(): string {
    const errors = this.formSubmit.get('limit')?.errors;
    if (errors?.['required']) {
      return 'The Limit is required';
    } else if (errors?.['min']) {
      return 'Put a Higher Number';
    }
    return '';
  }

  get offsetErrors(): string {
    const errors = this.formSubmit.get('offset')?.errors;
    if (errors?.['required']) {
      return 'The Offset is required';
    } else if (errors?.['min']) {
      return 'Put a Higher Number';
    }
    return '';
  }
}
//notify Angular https://www.npmjs.com/package/notify-angular
