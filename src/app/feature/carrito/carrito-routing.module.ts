import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComprarProductoComponent } from './components/comprar-producto/comprar-producto.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  { 
    path: '',
    component: CarritoComponent,
    children: [
      { path: 'carrito', component: ComprarProductoComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
