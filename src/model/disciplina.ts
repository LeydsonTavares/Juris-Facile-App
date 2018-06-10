import { Tema } from './tema';

export interface Disciplina {
  id: number;
  titulo: string;
  temas: Tema[];
}
