// hunting.model.ts
import { Member } from './member.model';
import { Competition } from './competition.model';
import { Fish } from './fish.model';

export interface Hunting {
  id: number;
  numberOfFish: number;
  competitionId: number;
  memberNum: number;
  fishId: number;
  member?: Member;
  competition?: Competition;
  fish?: Fish;
}