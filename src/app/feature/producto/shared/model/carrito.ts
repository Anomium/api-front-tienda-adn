export class Carrito {
    id: string;
    nombre: string;
    precioProducto: number;
    precioTotal: number;
    cantidad: number;
    estadoCompra: string;

    constructor(id: string, nombre: string, precioProducto: number, 
        precioTotal: number, cantidad: number, estadoCompra: string) {
        this.id = id;
        this.nombre = nombre;
        this.precioProducto = precioProducto;
        this.precioTotal = precioTotal;
        this.cantidad = cantidad;
        this.estadoCompra = estadoCompra;
    }
}
