import { Injectable } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RespuestaCalculadoraService {

  mostrarModal = false;
  aceptartyc: any = false;

  observableAceptarTyc: any;
  totalcuota: number;
  constructor() {
    this.observableAceptarTyc = new BehaviorSubject<number>(this.aceptartyc);
   }

  calcularCuota(periodo: number, monto: number, tipo: string) {
    const nmv = tipo === 'carro' ? Constantes.carro.tasa : Constantes.moto.tasa;
    const seguroTotal = this.calcularTotalSeguro(monto, periodo, tipo);
    const valorCuota = this.functionPago(nmv, periodo, monto);
    const seguroCuota = this.functionPago(nmv, periodo, seguroTotal);
    return valorCuota + seguroCuota;
  }

  functionPago(nmv: number, periodo: number, monto: number) {
    const parteUno = monto * nmv;
    const parteDos = 1 - Math.pow((1 + nmv), (- (periodo)));
    return Math.round(parteUno / parteDos);
  }

  calcularTotalSeguro( monto: number, periodo: number, tipo: string) {
    const seguro = tipo === 'carro' ? Constantes.carro.constanteSeguro : Constantes.moto.constanteSeguro;
    return Math.round(seguro * monto * periodo);
  }

  toggleMostrarModal() {
    this.mostrarModal = !this.mostrarModal;
  }
  toggleAceptaTyc() {
    this.aceptartyc = !this.aceptartyc;
    this.observableAceptarTyc.next(this.aceptartyc);
    this.toggleMostrarModal();
  }
}
