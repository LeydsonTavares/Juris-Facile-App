import { Tema } from './tema';
import { Profissao } from './profissao';
import { Termo } from './termo';
import { SubTermo } from './subTermo';

export var ListProfissoes = [
    new Profissao(0, 'Sistemas de Informação', ListTemas),
    new Profissao(1, 'Chapinha Profissional', ListTemas),
    new Profissao(3, 'Pipoqueira Elétrica', ListTemas),
    new Profissao(4, 'Samsung Galaxy On 7', ListTemas),
    new Profissao(5, 'Chapinha Profissional', ListTemas)];

export var ListTemas = [
    new Tema(0, 'Tema 1', ListTermos),
    new Tema(1, 'Tema 2', ListTermos),
    new Tema(3, 'Tema 3', ListTermos),
    new Tema(4, 'Tema 4', ListTermos),
    new Tema(5, 'Tema 5', ListTermos)];

export var ListTermos = [
    new Termo(0, 'Termo 1', ListSubTermos),
    new Termo(1, 'Termo 2', ListSubTermos),
    new Termo(3, 'Termo 3', ListSubTermos),
    new Termo(4, 'Termo 4', ListSubTermos),
    new Termo(5, 'Termo 5', ListSubTermos)];

export var ListSubTermos = [
    new SubTermo(0, 'SubTermo 1', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new SubTermo(1, 'SubTermo 2', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new SubTermo(3, 'SubTermo 3', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new SubTermo(4, 'SubTermo 4', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),
    new SubTermo(5, 'SubTermo 5', "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")];


