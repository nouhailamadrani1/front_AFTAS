

import { Competition } from './competition.model';
import { Member } from './member.model';
import { Fish } from './fish.model';

export interface Hunting {
  id: number;
  numberOfFish: number;
  competition: Competition;
  member: Member;
  fish: Fish;
}
