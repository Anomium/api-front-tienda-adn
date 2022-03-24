import { NgModule } from '@angular/core';
import { CarritoRoutingModule } from './carrito-routing.module';
import { ComprarProductoComponent } from '@producto/components/comprar-producto/comprar-producto.component';
import { SharedModule } from '@shared/shared.module';
import { CarritoService } from 'src/app/feature/carrito/components/shared/service/carrito.service';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    ComprarProductoComponent,
    CarritoComponent
  ],
  imports: [
    CarritoRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [ CarritoService ]
})
export class CarritoModule { }
