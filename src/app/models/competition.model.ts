// competition.model.ts

import { Time } from "@angular/common";

export interface Competition {
    code: number;
    date: Date;
    startTime: Time; 
    endTime: Time;   
    numberOfParticipants: number;
    location: string;
    amount: number;
  }
  