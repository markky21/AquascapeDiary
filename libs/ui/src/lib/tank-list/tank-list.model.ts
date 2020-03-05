export enum LightingType {
  LED = 'led'
}

export interface Lighting {
  type: LightingType;
  description: string;
  power: number;
  time: number;
}

export enum FiltrationType {
  EXTERNAL = 'external',
  INTERNAL = 'internal',
  HANG_ON = 'HANG_ON',
  SUMP = 'sump'
}

export interface Filtration {
  type: FiltrationType;
  name: string;
}

export interface Tank {
  id: string;
  title: string;
  tank_size: {
    width: number;
    deep: number;
    height: number;
  };
  volume: number;
  background: string;
  lighting: Lighting[];
  filtration: Filtration;
  tech: {
    co2: boolean;
    ph_computer: boolean;
  };
  plants: string[];
  animals: string[];
  materials: string[];
  created_at: Date;
  ended_ad: Date;
}
