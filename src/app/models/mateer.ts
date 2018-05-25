export class Mateer {
    nombre: string;
    codigo: string;
    grupos: any[];
}

export class NewMateer {
    nombre: string;
    codigo: string;
    horario: any[];
    NewMateer(nombre: string, codigo: string, horarios: any[]) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.horario = horarios;
    }
}
