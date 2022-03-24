import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class DialogoService {

  constructor() { }

  public mostrarMensajeErrorDialog(mensaje: string) {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un Error inesperado, vuelve a intentarlo.',
      text: mensaje
    });
  }

  public mostrarMensajeExitoDialog(mensaje: string) {
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: mensaje
    });
  }

  public mostrarMensajeInformacionDialog(mensaje: string) {
    Swal.fire({
      icon: 'info',
      title: 'Actualizado',
      text: mensaje
    });
  }

}
