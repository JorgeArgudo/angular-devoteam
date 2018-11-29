export interface ICurso {
    id: string | number;
    nombre: string;
    descripcion: string;
}

export interface ITurno {
    id: string | number;
    nombre: string;
    horario: string;
}

export class Alumno {

    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: Turno = {id: '', nombre: '', horario: ''},
        public curso: Curso = {id: '', nombre: '', descripcion: ''}
    ) {}
}

export class Curso implements ICurso {

    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion: string = ''
    ) {}
}

export class Turno implements ITurno {

    constructor(
        public id: string = '',
        public nombre: string = '',
        public horario: string = ''
    ) {}
}
