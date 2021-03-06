const nombreCliente = "Santander Consumer"

export const Constantes = {
  moto: {
    constanteSeguro: 1220 / 1000000,
    tasa: 0.0115,
    fondo: './assets/img/fondo-moto.jpg', //agregado
    modelos: [
      { value: 0, name: "Selecciona el modelo" },
      { value: 6, name: "2050" },
      { value: 7, name: "2011" },
      { value: 8, name: "2012" },
      { value: 9, name: "2013" },
      { value: 10, name: "2014" },
      { value: 11, name: "2015" },
      { value: 12, name: "2016" },
      { value: 13, name: "2017" },
      { value: 14, name: "2018" },
      { value: 15, name: "2019" },
      { value: 16, name: "2020" },
      { value: 17, name: "2021" },
      { value: 18, name: "2022" }
    ],
    periodos: [
      { value: 4, name: 12 },
      { value: 5, name: 24 },
      { value: 6, name: 48 },
      { value: 7, name: 60 }
    ],
    preciMinimo: 12500000,
    preciTop: 20000000,
  },
  carro: {
    constanteSeguro: 1220 / 1000000,
    tasa: 0.0115,
    fondo: './assets/img/fondo2.jpg',
    modelos: [
      { value: 0, name: "Selecciona el modelo" },
      { value: 6, name: "2010" },
      { value: 7, name: "2011" },
      { value: 8, name: "2012" },
      { value: 9, name: "2013" },
      { value: 10, name: "2014" },
      { value: 11, name: "2015" },
      { value: 12, name: "2016" },
      { value: 13, name: "2017" },
      { value: 14, name: "2018" },
      { value: 15, name: "2019" },
      { value: 16, name: "2020" },
      { value: 17, name: "2021" },
      { value: 18, name: "2022" }
    ],
    periodos: [
      { value: 4, name: 48 },
      { value: 5, name: 60 },
      { value: 6, name: 72 },
      { value: 7, name: 84 }
    ],
  },
/*  periodos: [
    { value: 4, name: 48 },
    { value: 5, name: 60 },
    { value: 6, name: 72 },
    { value: 7, name: 84 }
  ],
  periodosMotos: [
    { value: 4, name: 12 },
    { value: 5, name: 24 },
    { value: 6, name: 48 },
    { value: 7, name: 60 }
  ],*/
  minimo: 10000000,
  minimoMoto: 10000000,
  precioMinimo: 13000000,
  preciMinimoMoto: 12500000,
  valorMinIngreso: 1200000,
  valorMinIngresoMoto: 1200000,
  tasa: 0.0115,
  tasaMoto: 0.0115,
  constanteSeguro: 1220 / 1000000,
  constanteSeguroMoto: 1220 / 1000000,
  /* Regex */
  patternLetter: "^[a-zA-Z ????????????????????????]+$",
  patternNumber: "[0-9]+$",
  patternCel: "^3+[0-9]{0,10}$",
  patternMail: "^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$",

  ocupaciones: [
    { value: null, name: 'Tipo de ocupaci??n' },
    { value: 1, name: 'Pensionado' }, /* 15 */
    { value: 11, name: 'Empleado' }, /* 16 */
    { value: 2, name: 'Independiente' } /* 3 */
  ],
  tipoDocumento: [
    { value: null, name: 'Tipo de identificaci??n' },
    { value: 1, name: 'C??dula de Ciudadan??a' },
    { value: 2, name: 'C??dula de Extranjer??a' }
  ],

  // modelos: [
  //   { value: 0, name: "Selecciona el modelo" },
  //   { value: 6, name: "2010" },
  //   { value: 7, name: "2011" },
  //   { value: 8, name: "2012" },
  //   { value: 9, name: "2013" },
  //   { value: 10, name: "2014" },
  //   { value: 11, name: "2015" },
  //   { value: 12, name: "2016" },
  //   { value: 13, name: "2017" },
  //   { value: 14, name: "2018" },
  //   { value: 15, name: "2019" },
  //   { value: 16, name: "2020" },
  //   { value: 17, name: "2021" },
  //   { value: 18, name: "2022" }
  // ],
  // modelosMotos: [
  //   { value: 0, name: "Selecciona el modelo" },
  //   { value: 6, name: "2030" },
  //   { value: 7, name: "2011" },
  //   { value: 8, name: "2012" },
  //   { value: 9, name: "2013" },
  //   { value: 10, name: "2014" },
  //   { value: 11, name: "2015" },
  //   { value: 12, name: "2016" },
  //   { value: 13, name: "2017" },
  //   { value: 14, name: "2018" },
  //   { value: 15, name: "2019" },
  //   { value: 16, name: "2020" },
  //   { value: 17, name: "2021" },
  //   { value: 18, name: "2022" }
  // ],
  userpass: "cwBhAG4AdABhAG4AZABlAHIAOgBiAHMANABuADQAcAAxAA==",
  tyc: {
    titulo: `TERMINOS Y CONDICIONES PORTAL ${nombreCliente}`,
    contenido: [
      "SANTANDER CONSUMER informa que: 1) Act??a como fuente, usuario y en general responsable y/o encargado de Tratamiento de informaci??n personal, comercial, financiera, socioecon??mica, crediticia, de servicios y eventualmente proveniente de terceros pa??ses (en adelante Informaci??n Personal). Act??a en virtud de los convenios que tiene celebrados con instituciones financieras para colaborar en la administraci??n de centros de atenci??n a clientes de tales instituciones, para la financiaci??n  de veh??culos, por lo cual puede trabajar bien sea directamente o para transmitir y entregar posteriormente la Informaci??n Personal a la instituci??n financiera o al concesionario donde se venden los veh??culos automotores. Para todos los efectos de la presente autorizaci??n dicha instituci??n financiera, concesionario de venta de veh??culos o, en general, quien obre en nombre de SANTANDER CONSUMER o quien represente sus derechos y sus sucesores a cualquier t??tulo, se definir??n como EL TERCERO AUTORIZADO. 2) El Tratamiento de la Informaci??n Personal incluye la recolecci??n, almacenamiento, procesamiento, uso, circulaci??n, transmisi??n, consulta, reporte y supresi??n. 3) El Titular de la Informaci??n Personal tiene los derechos previstos en la Constituci??n y la ley, especialmente el de conocer, actualizar y rectificar la Informaci??n Personal.",
      "Estos derechos los podr?? ejercer SANTANDER CONSUMER o el TERCERO AUTORIZADO conforme con el procedimiento establecido en las Pol??ticas de Recolecci??n, Uso y Administraci??n de Informaci??n Personal que SANTANDER CONSUMER mantiene a disposici??n del Titular en la p??gina www.premiercredit.co. 4) El Titular de la Informaci??n Personal, obrando directamente o a trav??s de quien suscribe este documento, de manera voluntaria y expl??cita confiere autorizaci??n a SANTANDER CONSUMER o al TERCERO AUTORIZADO para TRATAR la Informaci??n Personal, con los siguientes fines: a) An??lisis de riesgos financieros, para ofrecimiento de productos y servicios financieros tales como cr??ditos, banca seguros, y en general los productos y servicios que las disposiciones legales permitan desarrollar a SANTANDER CONSUMER o al TERCERO AUTORIZADO. b) Para la verificaci??n de mi identidad en operaciones financieras, autorizo la recolecci??n, almacenamiento y uso de mis Datos Biom??tricos, los cuales conozco que son datos sensibles. c) Para circular y transferir mi Informaci??n Personal a la fuerza comercial y/o red de distribuci??n, telemercadeo y a terceros con los que SANTANDER CONSUMER o el TERCERO AUTORIZADO establezca contratos, convenios, acuerdos y alianzas para los fines indicados en esta Autorizaci??n, as?? como para implementar software y servicios de computaci??n en la nube. PREMIER CREDIT o el TERCERO AUTORIZADO quedan autorizados para obtener informaci??n sobre mis relaciones comerciales con otras entidades y consultar mis reportes ante las centrales de informaci??n; para ello se autoriza de manera expresa, previa e irrevocable a SANTANDER CONSUMER o al TERCERO AUTORIZADO a realizar ante cualquier operador de centrales de informaci??n cualquier operaci??n o Tratamiento sobre la informaci??n y los Datos Personales entregados, incluyendo la consulta, solicitud, procesamiento y divulgaci??n de toda la informaci??n relacionada con su comportamiento crediticio, el origen de las obligaciones a su cargo, cualquier novedad, modificaci??n, extinci??n, cumplimiento o incumplimiento de obligaciones.",
      "Queda autorizado para verificar mi comportamiento en las relaciones establecidas con cualquier otra entidad, bien directamente ante tal entidad o bien a trav??s de un operador de la informaci??n; se autoriza a recolectar, obtener, compilar, ofrecer, vender, intercambiar, enviar, divulgar, modificar, emplear, almacenar, procesar, transferir a cualquier t??tulo, y, en general, administrar la Informaci??n Personal provenientes del titular de los datos o sus leg??timos representantes, de las fuentes de informaci??n con las que se celebren convenios o contratos para el efecto, de los registros, documentos o publicaciones a los cuales haya tenido acceso SANTANDER CONSUMER o el TERCERO AUTORIZADO de otros bancos de datos o archivos de informaci??n cuyo objeto sea o no similar al de SANTANDER CONSUMER o el TERCERO AUTORIZADO; de autoridades p??blicas, nacionales o internacionales, que administren o lleven registros del cumplimiento e incumplimiento de obligaciones fiscales, parafiscales, relacionadas con la prevenci??n del blanqueo o lavado de activos o de la financiaci??n del terrorismo y cualquier otra informaci??n de car??cter p??blico, de bases de informaci??n p??blica y, en general, de cualquier otra permitida por la normatividad aplicable. En consideraci??n a que como consecuencia del an??lisis de riesgos y crediticio, la solicitud de financiaci??n se puede concretar por una de varias instituciones financieras con las cuales SANTANDER CONSUMER tiene establecidos convenios o relaciones comerciales, o que la financiaci??n puede provenir incluso del propio concesionario vendedor o de personas o entidades vinculadas con tal concesionario",
      "SANTANDER CONSUMER informa que tiene publicadas sus Pol??ticas de Recolecci??n, Uso y Administraci??n de Informaci??n Personal en la p??gina www.premiercredit.co. El Titular de la Informaci??n Personal, abajo firmante, informa a PREMIER que en desarrollo de los pagos efectuados de aportes al Sistema de Protecci??n Social, en desarrollo de la autoliquidaci??n y pagos o de la liquidaci??n por parte de un eventual empleador, se ha entregado su Informaci??n Personal al diligenciar la Planilla Integrada de Liquidaci??n de Aportes ??? PILA, informaci??n relacionada con sus ingresos mensuales base de cotizaci??n, pagos a trav??s del PILA y otros datos financieros. El Titular de la Informaci??n Personal confiere autorizaci??n para TRATAR su Informaci??n Personal, para recolectar, transferir, almacenar, usar, circular, suprimir, compartir, actualizar y transmitir la Informaci??n Personal con los siguientes fines: 1) An??lisis de riesgos financieros, para ofrecimiento de productos financieros; 2) Para recolectar mis datos, consultarlos, procesarlos, divulgarlos y mantenerlos ante cualquier operador de bases de datos. Se reconoce y acepta que los datos objeto del tratamiento, pueden llegar a quedar alojados por fuera de Colombia, en virtud de contratos o procesamiento de tal informaci??n con responsables de tal manejo por fuera de Colombia, caso en el cual PREMIER entregar?? la informaci??n bajo la existencia de un contrato y a responsables ubicados en pa??ses con un nivel de protecci??n de datos personales similar o superior al existente en Colombia. Se deja expresa constancia que la presente autorizaci??n puede ser revocada por el usuario y Titular de la Informaci??n Personal, en la medida que se cumplan con los requisitos legales para tal revocatoria"
    ]
  },

  /* Imagenes */
  aprobado: './assets/img/aprobado.png',
  negado: './assets/img/negado.png',
  fondo: './assets/img/fondo2.jpg',
  fondomoto: './assets/img/fondo-moto.jpg',
  fondomotoduke: './assets/img/360_KTM_390_DUKE.png',
  cliente: './assets/img/consumerFinance.png',
  santander: './assets/img/consumerFinance.png',
  santanderGris: './assets/img/consumerFinanceGris.png',
  santanderBlanco: './assets/img/consumerFinanceBlanco.png'
}
export const Constantes_Motos = {
  minimo: 10000000,
  precioMinimoMoto: 13000000,
  valorMinIngreso: 1200000,
  tasa: 0.0115,

}
