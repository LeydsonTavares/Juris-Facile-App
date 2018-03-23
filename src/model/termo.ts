import { SubTermo } from './subTermo';

export class Termo {
    
    constructor(
        public id: number,
        public titulo: string,
        public listSubTermos: SubTermo[]) { }

}