const activar = document.getElementById('btn-calc');

function esperarClick() {
  let combs = ingresarCombustible();
  let lits = ingresarLitros();

  if (combs.valido && lits.valido) {
    const surtidoresFiltrados = surtidores.filter((surtidor) => {
      return (
        surtidor.combustible.toUpperCase() === combs.valor &&
        lits.valor <= surtidor.litros
      );
    });

    let monto = 0;

    if (surtidoresFiltrados.length > 0) {
      const surtidorSeleccionado = surtidoresFiltrados[0];
      monto = surtidorSeleccionado.cargarCombustible(lits.valor);
      texto.innerHTML += total(
        surtidorSeleccionado.nombre,
        monto,
        surtidorSeleccionado.litros
      );

      let efectivo = pagoEfectivo();
      let tarjeta = pagoTarjeta();

      if (efectivo) {
        console.log('entro a efectivo');
        let saldo = saldoEfectivo();
        if (saldo > monto) {
          alert('Pago realizado con exito!');
        } else if (saldo < monto) {
          alert(
            'Saldo insuficiente! Debera pagar con targeta de credito o debito. El pago se realizara de forma instantanea.'
          );
        }
      } else {
        alert('no entro en efectivo');
      }

      if (tarjeta) {
        let contrasenia = claveTarjeta();
        if (contrasenia === 12345) {
          alert('Pago realizado con exito!');
          alert('Gracias por confiar en nosotros!');
        }
      }
    } else {
      alert('NO SE ENCONTRO NINGUN SURTIDOR DISPONIBLE');
    }
  } else {
    alert('Buen viaje y esperamos tenerlo por aqui nuevamente!');
  }
}

activar.addEventListener('click', () => {
  esperarClick();
});
