import {Level} from './level';


export class Career {
  nombre: string;
  codigo: string;
  niveles: Level[];

  public get name() {
    return this.nombre;
  }

  public get code() {
    return this.codigo;
  }
}
