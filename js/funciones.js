function ingresarOpcion() {
  let opcion = Number(
    prompt(
      "Bienvenido a Max Power. En que podemos ayudarle? \n 1. Cargar combustible. \n 2. Salir."
    )
  );
  if (opcion > 2) {
    alert(
      "OPCION NO VALIDA. LA OPERACION NO TENDRA EN CUENTA LAS DEMAS SELECCIONES QUE HAGA."
    );
  } else {
    return opcion;
  }
}

function ingresarCombustible() {
  let combustible = prompt("Con que combustible desea potenciar su vehiculo?:");
  let combustibleMayus = combustible.toUpperCase();
  return combustibleMayus;
}

function ingresarLitros() {
  let litros = Number(prompt("Ingrese los litros que desea cargar:"));
  if (!isNaN(litros)) {
    return litros;
  } else {
    alert(
      "INGRESE NUMEROS, NO LETRAS. LA OPERACION NO TENDRA EN CUENTA LAS DEMAS OPCIONES."
    );
  }
}

function pagoEfectivo() {
  let efect = confirm(
    "Desea pagar con efectivo? Seleccione ACEPTAR para pagar con efectivo."
  );
  return efect;
}

function pagoTarjeta() {
  let tarje = confirm(
    "Desea pagar con targeta? Si ya selecciono el metodo por efectivo, oprima CANCELAR."
  );
  return tarje;
}
