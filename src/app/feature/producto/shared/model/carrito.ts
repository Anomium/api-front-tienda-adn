export class Carrito {
    id: string;
    nombre: string;
    precio: number;
    precioTotal: number;
    cantidad: number;
    estadoCompra: string;
    cupon: string;

    constructor(id?: string, nombre?: string, precio?: number, precioTotal?: number, cantidad?: number, estadoCompra?: string, 
        cupon?: string) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.precioTotal = precioTotal;
        this.cantidad = cantidad;
        this.estadoCompra = estadoCompra;
        this.cupon = cupon;
    }
}
