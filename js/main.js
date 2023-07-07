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

let operacion = ingresarOpcion();

if (!isNaN(operacion)) {
  if (operacion != 2) {
    let combs = ingresarCombustible();
    let lits = ingresarLitros();

    const surtidoresFiltrados = surtidores.filter((surtidor) => {
      return (
        surtidor.combustible.toUpperCase() === combs && lits <= surtidor.litros
      );
    });

    let monto = 0;

    if (surtidoresFiltrados.length > 0) {
      const surtidorSeleccionado = surtidoresFiltrados[0];
      monto = surtidorSeleccionado.cargarCombustible(lits);
      alert(`SU TOTAL A PAGAR ES DE: ${monto}`);
      alert(`LITROS RESTANTES DEL SURTIDOR: ${surtidorSeleccionado.litros}`);

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
              alert(
                "Pago realizado con exito. Gracias por confiar en nosotros!"
              );
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
      alert("NO SE ENCONTRO NINGUN SURTIDOR DISPONIBLE");
    }
  } else {
    alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");
  }
} else {
  alert("INGRESE UN NUMERO VALIDO. OPERACION FINALIZADA.");
}

alert("Buen viaje y esperamos tenerlo por aqui nuevamente!");
