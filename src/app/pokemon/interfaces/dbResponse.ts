export interface DBResponse {
  data: Datum[];
  success: boolean;
  message: string;
}

export interface Datum {
  name: string;
  weight: number;
  height: number;
  abilities: Ability[];
  pokeSprite: PokeSprite;
  types: Types;
  stats: Stats;
  creationTime: Date;
}

export interface Ability {
  firstAbility: string;
  secondAbilitiy: string;
  creationTime: Date;
}

export interface PokeSprite {
  urlSprite: string;
  creationTime: Date;
}

export interface Stats {
  stats: string;
  creationTime: Date;
}

export interface Types {
  types: string;
  creationTime: Date;
}
