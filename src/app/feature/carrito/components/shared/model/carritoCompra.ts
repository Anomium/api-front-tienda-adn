export class CarritoCompra {
    id: string;
    cupon: string;
    precio: number;
    cantidad: number;

    constructor(id?: string, precio?: number, cantidad?: number) {
        this.id = id;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
