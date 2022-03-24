import { NgModule } from '@angular/core';

import { ProductoRoutingModule } from './producto-routing.module';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { SharedModule } from '@shared/shared.module';
import { ProductoService } from './shared/service/producto.service';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { SoporteComponent } from './components/consultar-soporte/consultar-soporte.component';
import { CrearSoporteComponent } from './components/crear-soporte/crear-soporte.component';
import { SoporteService } from './shared/service/soporte.service';
import { DialogoService } from './shared/service/dialogo.service';
import { CarritoService } from '../carrito/components/shared/service/carrito.service';



@NgModule({
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    ProductoComponent,
    ActualizarProductoComponent,
    SoporteComponent,
    CrearSoporteComponent
  ],
  imports: [
    ProductoRoutingModule,
    SharedModule
  ],
  providers: [ProductoService, SoporteService, DialogoService, CarritoService]
})
export class ProductoModule { }
