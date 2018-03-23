import { Termo } from './termo';

export class Tema {
    constructor(
        public id: number,
        public titulo: string,
        public listTermos: Termo[]) { }
}
