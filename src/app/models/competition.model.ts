// competition.model.ts

import { Time } from "@angular/common";

export interface Competition {
  code: number;
  date: Date;
  startTime: { hours: number, minutes: number }; 
  endTime: { hours: number, minutes: number };   
  numberOfParticipants: number;
  location: string;
  amount: number;
}
  