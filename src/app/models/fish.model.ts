import { Level } from './level.model';

export interface Fish {
  id?: number;
  name: string;
  averageWeight: number;
  level: Level;
}