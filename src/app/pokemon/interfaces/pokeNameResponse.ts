export interface PokeNameResponse {
  data: Datum[];
  success: boolean;
  message: string;
}

export interface Datum {
  name: string;
  weight: number;
  height: number;
  abilities: AbilityElement[];
  types: Type[];
  sprites: Sprites;
  stats: StatElement[];
}

export interface AbilityElement {
  ability: AbilityAbility;
}

export interface AbilityAbility {
  name: string;
}

export interface Sprites {
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
}

export interface DreamWorld {
  front_default: string;
}

export interface StatElement {
  base_stat: number;
  effort: number;
  stat: TypeClass;
}

export interface TypeClass {
  name: string;
  url: string;
}

export interface Type {
  slot: number;
  type: TypeClass;
}
