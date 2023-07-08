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
