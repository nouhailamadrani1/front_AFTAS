// competition.model.ts

export interface Competition {
    code?: number;
    date: Date;
    startTime: string; 
    endTime: string;   
    numberOfParticipants: number;
    location: string;
    amount: number;
  }
  