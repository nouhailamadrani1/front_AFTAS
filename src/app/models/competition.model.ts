export interface Competition {
  id: number;
  code: string;
  date: Date;
  startTime: { hours: number, minutes: number };
  endTime: { hours: number, minutes: number };
  numberOfParticipants: number;
  location: string;
  amount: number;
  status?: string;
}