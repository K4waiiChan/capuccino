import {Mateer} from './mateer';


export class Level {
  codigo: string;
  materias: Mateer[];

  public code() {
    return this.codigo;
  }
  public name() {
    return 'grupo ' + this.codigo;
  }
}
