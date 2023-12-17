
export interface Fish {
  id: number;
  name: string;
  averageWeight: number;
  level: {
    id: number;
    code: number;
    description: string;
    points: number;
  };
}
