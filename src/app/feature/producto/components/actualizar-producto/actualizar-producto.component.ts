import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Producto } from '@producto/shared/model/producto';
import { ProductoService } from '@producto/shared/service/producto.service';


@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent implements OnInit {
  public listaProductos: Producto[];
  actualizarProductoForm: FormGroup;

  producto: Producto = new Producto();
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.construirFormularioProducto();
    this.consultar();
  }

  consultar() {
    let id = localStorage.getItem('id');
    
    this.productoService.consultar()
    .subscribe(data => {
      this.producto = data.find(producto => {
        if(producto.id+"" === id+"") {
          this.producto = producto
          this.listaProductos = [this.producto] 
        }
      });
      
    });
    
  }

  actualizarProducto() {
    console.log(this.actualizarProductoForm.value)
    this.productoService.actualizar(this.actualizarProductoForm.value)
    .subscribe(data => console.log(data));
  }

  private construirFormularioProducto() {
    this.actualizarProductoForm = new FormGroup({
      id: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      precio: new FormControl('',[Validators.required]),
      cantidad: new FormControl('',[Validators.required]),
      fechaCreacion: new FormControl('',[Validators.required])

    });
  }

}
