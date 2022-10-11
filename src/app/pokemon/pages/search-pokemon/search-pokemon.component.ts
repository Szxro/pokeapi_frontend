import { Component, OnInit } from '@angular/core';
import { PokeService } from '../../services/poke.service';
import { NotifierService } from 'angular-notifier';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PokeResponse } from '../../interfaces/pokeResponse';
import { catchError } from '../../interfaces/errorCatch';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [],
})
export class SearchPokemonComponent implements OnInit {
  catchPokemon: PokeResponse[] = [];
  loading!: boolean;
  errorList!: catchError;

  constructor(
    private _ps: PokeService,
    private _notifier: NotifierService,
    private _fb: FormBuilder
  ) {}
  ngOnInit(): void {}

  formSubmit: FormGroup = this._fb.group({
    data: [, [Validators.required]],
  });

  get dataError(): string {
    const errors = this.formSubmit.get('data')?.errors;
    if (errors?.['required']) {
      return 'The Input need to be fill';
    }
    return '';
  }

  getPokemonByName(name: string) {
    this.catchPokemon = [];
    this.loading = true;
    this._ps.getByName(name).subscribe(
      (x) => {
        if (x.data === null) {
          this.loading = false;
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
          this.loading = false;
        }
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

  getDataForm() {
    if (this.formSubmit.invalid) {
      this.formSubmit.markAllAsTouched();
      return;
    } else {
      this.getPokemonByName(this.formSubmit.get('data')?.value.toLowerCase());
    }
  }

  checkInputs(value: string) {
    return (
      this.formSubmit.controls[value].errors &&
      this.formSubmit.controls[value].touched
    );
  }
}
