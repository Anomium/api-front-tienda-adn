import { by, element } from 'protractor';

export class ProductoPage {
    private linkCrearProducto = element(by.id('linkCrearProducto'));
    private linkListarProductos = element(by.id('linkListarProducto'));
    private linkActualizarProducto = element(by.id('linkActualizarProducto'));
    private linkComprarProducto = element(by.id('linkComprarProducto'));
    private inputIdProducto = element(by.id('idProducto'));
    private inputDescripcionProducto = element(by.id('descripcionProducto'));
    private listaProductos = element.all(by.css('ul.productos li'));
    private linkSoporte = element(by.id('linkSoporte'));
    private linkCrearSoporte = element(by.id('linkCrearSoporte'));


    async clickBotonCrearProductos() {
        await this.linkCrearProducto.click();
    }

    async clickBotonListarProductos() {
        await this.linkListarProductos.click();
    }
    
    async clickBotonActualizarProducto() {
        await this.linkActualizarProducto.click();
    }
    
    async clickBotonComprarProducto() {
        await this.linkComprarProducto.click();
    }

    async clickBotonSoporte() {
        await this.linkSoporte.click;
    }

    async clickBotonCrearSoporte() {
        await this.linkCrearSoporte.click;
    }

    async ingresarId(idProducto) {
        await this.inputIdProducto.sendKeys(idProducto);
    }

    async ingresarDescripcion(descripcionProducto) {
        await this.inputDescripcionProducto.sendKeys(descripcionProducto);
    }

    async contarProductos() {
        return this.listaProductos.count();
    }
}
