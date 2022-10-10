import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllResponse } from '../interfaces/allReponse';
import { environment } from '../../../environments/environment';
import { DBResponse } from '../interfaces/dbResponse';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  /*Need a limit a offset (default values 20/0)*/
  private urlAll: string = environment.allUrl;
  private urlDB: string = environment.dbUrl; /*Just a Get*/
  /*Need a name*/
  private searchByName: string = environment.searchPokeName;
  private savePokemon: string = environment.savePokemon;

  constructor(private _http: HttpClient) {}

  private allUrl(limit: number, offset: number): HttpParams {
    const allParams = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);
    return allParams;
  }

  getAll(limit: number, offset: number): Observable<AllResponse> {
    return this._http.get<AllResponse>(this.urlAll, {
      params: this.allUrl(limit, offset),
    });
  }
  getDB(): Observable<DBResponse> {
    return this._http.get<DBResponse>(this.urlDB);
  }

  getByName(name: string): Observable<AllResponse> {
    return this._http.get<AllResponse>(`${this.searchByName}/${name}`);
  }

  saveByName(name: string): Observable<AllResponse> {
    return this._http.get<AllResponse>(`${this.savePokemon}/${name}`);
  }
}
