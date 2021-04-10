import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from '../../../constantes/constantes';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TouchedErrorStateMatcher } from '../shared/touchedErrorStateMatcher';

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
  styleUrls: ['./pasouno.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class PasounoComponent implements OnInit {
  @Input() tipo: string;
  const = Constantes;
  matcher = new TouchedErrorStateMatcher;
  min: number;
  model: any;
  period: any;
  porcentaje: number = 0;
  precioMin: number;
  primero: FormGroup;
  title_modelo: string;
  title_modelo_Lb: string;
  title_precio: string;
  /* cuota: number = 0; */

  constructor( public formBuilder: FormBuilder, public consultaCentrales: ConsultaCentralesService, public respuestaCalculadora: RespuestaCalculadoraService ) {
  }

  ngOnInit() {
    this.crearValores();
    this.crearFormulario();
    this.statusCambia();
   }

  crearValores() {
    this.title_precio = this.tipo === 'carro' ? '¿Cuál es el precio del vehiculo?' : '¿Cuál es el precio de la moto?';
    this.title_modelo = this.tipo === 'carro' ? 'Modelo del carro' : 'Modelo de la moto';
    this.title_modelo_Lb = this.tipo === 'carro' ? 'Modelo del carro' : 'Modelo de la moto';
    this.precioMin = this.tipo === 'carro' ? this.const.precioMinimo : this.const.preciMinimoMoto;
    this.min = this.tipo === 'carro' ? this.const.minimo : this.const.minimoMoto;
    this.period = this.tipo === 'carro' ? this.const.carro.periodos : this.const.moto.periodos;
    this.model = this.tipo === 'carro' ? this.const.carro.modelos : this.const.moto.modelos;
  }

  crearFormulario() {
    this.primero = this.formBuilder.group({
      precio: ['', [Validators.required, Validators.min(this.precioMin)]],
      modelo: ['', [Validators.required]],
      cuotaInicial: ['', [Validators.required]],
      monto: ['', [Validators.required, Validators.min(this.min)]],
      periodo: ['', Validators.required],
      cuota: [0, Validators.required]
    });

    this.primero.controls['monto'].disable();

    /* Subcripción de Resultados */
    this.primero.controls['monto'].valueChanges.subscribe( value => {
      this.consultaCentrales.contactoCentrales.OtrosDatos.ValorFinanciar = value;
      if (this.primero.get('periodo').value) {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value, this.tipo));
      }
    });

    this.primero.controls['precio'].valueChanges.subscribe( value => {
      this.consultaCentrales.contactoCentrales.DatosBasicos.ValorVehiculo = value;
      this.makeCuotaInicial();
    });

    this.primero.controls['periodo'].valueChanges.subscribe( () => {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value, this.tipo));
        this.consultaCentrales.contactoCentrales.DatosBasicos.Plazo = this.aniosPeriodo(this.primero.get('periodo').value);
    });

    this.primero.controls['cuotaInicial'].valueChanges.subscribe( () => { 
      this.makeValorTotal(this.consultaCentrales.contactoCentrales.DatosBasicos.ValorVehiculo, Number(this.primero.controls['cuotaInicial'].value));
    });

    this.primero.controls['modelo'].valueChanges.subscribe( value => { 
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Modelo = value;
    });
  }

  makeCuotaInicial(){
    this.consultaCentrales.contactoCentrales.DatosBasicos.CuotaInicial = this.calcularInicial(this.primero.controls['precio'].value);
    this.primero.controls['cuotaInicial'].setValue(this.calcularInicial(this.primero.controls['precio'].value));
    this.calculaPorcentaje();
    this.makeValorTotal(this.consultaCentrales.contactoCentrales.DatosBasicos.ValorVehiculo, this.consultaCentrales.contactoCentrales.DatosBasicos.CuotaInicial);
  }

  calcularInicial(precio: number) {
    let precioInicial = precio * 0.1;

    if ((this.tipo === 'moto') && precio >= this.const.moto.preciMinimo
      && precio <= this.const.moto.preciTop)  {
      precioInicial = precio * 0.2;
    }
    if (this.tipo === 'moto' && precio > this.const.moto.preciTop) {
      precioInicial = 0;
    }
    return precioInicial;
  }

  makeValorTotal(valorVehiculo, cuotaInicial){
    this.consultaCentrales.contactoCentrales.OtrosDatos.ValorFinanciar = valorVehiculo - cuotaInicial;
    this.primero.controls['monto'].setValue(valorVehiculo - cuotaInicial);
    this.calculaPorcentaje();
  }

  calculaPorcentaje(){
    this.porcentaje = (Number(this.primero.controls['cuotaInicial'].value) * 100) / this.primero.controls['precio'].value;
  }

  // calculosMoto(cuotaInicial: number, precio: number) {
  //   let porcentajeCalc = 0;
  //   if (precio < this.const.moto.preciMinimo) {
  //     porcentajeCalc = (cuotaInicial * 100) / precio;
  //   } else if (precio >= this.const.moto.preciMinimo && precio <= this.const.moto.preciTop) {
  //     porcentajeCalc = (cuotaInicial * 200) / precio;
  //   } else {
  //     porcentajeCalc = 0;
  //   }
  //   return porcentajeCalc;
  // }

  statusCambia() {
    this.primero.statusChanges.subscribe(val => {
      val === 'VALID' ? this.consultaCentrales.primeroCompleto = true : this.consultaCentrales.primeroCompleto = false;
    });
  }

  aniosPeriodo( value ){
    switch (value) {
      case 12: 
        value = 2;
        break;
      case 48: 
        value = 4;
        break;
      case 60: 
        value = 5;
        break;
      case 72: 
        value = 6;
        break;
      case 84: 
        value = 7;
        break;
      default:
        break;
    }
    return value.toString();
  }

  get montoNoValido() {
    return this.primero.get('monto').invalid && this.primero.get('monto').touched;
  }
  get precioNoValido() {
    return this.primero.get('precio').invalid && this.primero.get('precio').touched;
  }
  get cuotaInicialNoValido() {
    return this.primero.get('cuotaInicial').invalid && this.primero.controls['cuotaInicial'].touched;
  }
  get cuotaInicialMayor(){
    return Number(this.primero.get('cuotaInicial').value) > Number(this.primero.get('precio').value);
  }
  get tipoIdNoValido() {
    return this.primero.controls['modelo'].value == 0 || this.primero.controls['modelo'].value == "";
  }
}
