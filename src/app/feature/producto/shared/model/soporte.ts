export class Soporte {
    id: string;
    descripcion: string;
    fechaASolucionar: string;
    estado: string;

    constructor(id?: string, descripcion?: string, fechaASolucionar?: string) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaASolucionar = fechaASolucionar;
    }
}
