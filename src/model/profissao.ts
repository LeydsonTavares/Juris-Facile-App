
import { Tema } from './tema';

export class Profissao {

  constructor(
    public id: number,
    public titulo: string,
    public url: string,
    public temas: Tema[]) {
  }
}
