
import { Disciplina } from './disciplina';

export class Profissao {

  constructor(
    public id: number,
    public titulo: string,
    public url: string,
    public disciplinas: Disciplina[]) {
  }
}
