export class Producto {
    id: string;
    nombre: string;
    precio: number;
    cantidad: number;
    fechaCreacion: string;
    
    constructor(id?: string, nombre?: string, precio?: number, cantidad?: number, fechaCreacion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.fechaCreacion = fechaCreacion;
    }
}
