import { by, element } from 'protractor';

export class CarritoPage {

    private linkComprarProducto = element(by.id('linkComprarProducto'));

    async clickBotonComprarProducto() {
        await this.linkComprarProducto.click();
    }
}
