let monto = 0;

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

    if (surtidoresFiltrados.length > 0) {
      const surtidorSeleccionado = surtidoresFiltrados[0];
      monto += surtidorSeleccionado.cargarCombustible(lits.valor);
      texto.innerHTML += total(
        surtidorSeleccionado.nombre,
        monto,
        surtidorSeleccionado.litros
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontro ningun surtidor disponible! Vuelve a intentarlo mas tarde.',
        background: 'Dark',
      });
    }
  }
}

btnCalcular.addEventListener('click', esperarClick);
