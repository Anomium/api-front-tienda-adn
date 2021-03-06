import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProductoComponent } from './components/listar-producto/listar-producto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { ComprarProductoComponent } from './components/comprar-producto/comprar-producto.component';
import { SoporteComponent } from './components/consultar-soporte/consultar-soporte.component';
import { CrearSoporteComponent } from './components/crear-soporte/crear-soporte.component';


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
        path: 'actualizar',
        component: ActualizarProductoComponent
      },
      {
        path: 'comprar',
        component: ComprarProductoComponent
      },
      {
        path: 'soporte',
        component: SoporteComponent
      },
      {
        path: 'crearSoporte',
        component: CrearSoporteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
