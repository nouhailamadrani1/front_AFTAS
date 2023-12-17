import { Competition } from './competition.model';
import { Member } from './member.model';

export interface Ranking {
  id: number;
  rank: number;
  score: number;
  competition: Competition;
  member: Member;
}
