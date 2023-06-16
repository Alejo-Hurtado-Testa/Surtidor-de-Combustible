const vibraniums = 236.43;
const paladiumi = 342.67;
const cryptonid = 565.23;
const alamantiumud = 692.12;
const galliongo = 832.78;

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
  let combustible = Number(
    prompt("Con que combustible desea potenciar su vehiculo?:")
  );
  if (combustible < 6) {
    return combustible;
  } else {
    alert(
      "INGRESE UN NUMERO DE COMBUSTIBLE VALIDO. LA OPERACION NO TENDRA EN CUENTA LAS DEMAS SELECCIONES QUE HAGA."
    );
  }
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

function calcularMonto(lts, combus) {
  let monto = 0;
  if (combus === 1) {
    monto = lts * vibraniums;
  }

  if (combus === 2) {
    monto = lts * paladiumi;
  }

  if (combus === 3) {
    monto = lts * cryptonid;
  }

  if (combus === 4) {
    monto = lts * alamantiumud;
  }

  if (combus === 5) {
    monto = lts * galliongo;
  }
  return monto;
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

let operacion = ingresarOpcion();

if (!isNaN(operacion)) {
  if (operacion != 2) {
    let combustible = ingresarCombustible();
    let litros = ingresarLitros();
    let monto = calcularMonto(litros, combustible);

    alert("Su monto total a pagar es de: " + monto);

    let efectivo = pagoEfectivo();
    let tarjeta = pagoTarjeta();

    if (efectivo) {
      let saldo = Number(prompt("Ingrese su saldo"));
      if (saldo > monto) {
        alert("Pago realizado con exito!");
      } else if (saldo < monto) {
        alert(
          "Saldo insuficiente! Debera pagar con targeta de credito o debito. El pago se realizara de forma instantanea."
        );
        tarjeta = true;
      }
    }

    if (tarjeta) {
      for (i = 0; i < 3; i++) {
        let contrasenia = Number(
          prompt("Ingrese su DNI que tenga registrado en las tarjetas:")
        );
        if (contrasenia === 12345) {
          let targetadoc = confirm(
            "Oprima ACEPTAR para pagar con debito u oprima CANCELAR para pagar con credito"
          );
          if (targetadoc) {
            let saldo = Number(
              prompt("Ingrese el saldo de la tarjeta de debito")
            );
            if (saldo > monto) {
              alert("Pago realizado con exito!");
              break;
            } else if (saldo < monto) {
              alert(
                "Saldo insuficiente! Debera pagar con targeta de credito. El pago se realizara de forma instantanea. Gracias por confiar en nosotros!"
              );
              targetadoc = false;
              break;
            }
          } else if (!targetadoc) {
            alert("El pago se realizara de forma instantanea.");
            alert("Pago realizado con exito. Gracias por confiar en nosotros!");
            break;
          }
        } else {
          alert(
            "Contrasenia incorrecta. Le quedan: " + (2 - [i]) + " intentos"
          );
        }
      }
    }
  } else {
    alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");
  }
} else {
  alert("INGRESE UN NUMERO VALIDO. OPERACION FINALIZADA.");
}

alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");
