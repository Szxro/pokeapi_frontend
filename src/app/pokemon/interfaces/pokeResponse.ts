import { AbilityElement, StatElement, Type } from './allReponse';
import { Ability } from './dbResponse';

export interface PokeResponse {
  name: string;
  weight: number;
  height: number;
  abilities: AbilityElement[] | Ability[];
  types: Type[];
  sprites: string;
  stats: StatElement[];
}
