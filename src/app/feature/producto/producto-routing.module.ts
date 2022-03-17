import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { ComprarProductoComponent } from './components/comprar-producto/comprar-producto.component';


const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [
      {
        path: 'crear',
        component: CrearProductoComponent
      },
      {
        path: 'listar',
        component: ListarProductoComponent
      },
      {
        path: 'borrar',
        component: BorrarProductoComponent
      },
      {
        path: 'actualizar',
        component: ActualizarProductoComponent
      },
      { 
        path: 'comprar',
        component: ComprarProductoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
