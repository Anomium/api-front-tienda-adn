import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '@producto/shared/service/producto.service';
import { Producto } from '@producto/shared/model/producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  public listaProductos: Producto[];

  constructor(protected productoService: ProductoService, private router: Router) { }

  ngOnInit() {
    this.productoService.consultar()
    .subscribe(data => {
      this.listaProductos = data
    });
    console.log(this.listaProductos)
  }

  editar(producto: Producto) {
    localStorage.setItem('id', producto.id);
    this.router.navigate(['/producto/actualizar']);
  }

}
