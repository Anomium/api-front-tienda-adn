import { Component, OnInit } from '@angular/core';
import { Soporte } from '@producto/shared/model/soporte';
import { SoporteService } from '@producto/shared/service/soporte.service';

@Component({
  selector: 'app-soporte',
  templateUrl: './consultar-soporte.component.html',
  styleUrls: ['./consultar-soporte.component.css']
})
export class SoporteComponent implements OnInit {

  public listarSoporte: Soporte[];

  constructor(protected soporteService: SoporteService) { }

  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.soporteService.consultar()
      .subscribe(data => 
        this.listarSoporte = data
      );
  }

}
