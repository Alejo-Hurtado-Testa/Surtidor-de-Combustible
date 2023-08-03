import { crearSurtidores } from './surtidores.js';

const btnCalcular = document.getElementById('btn-calc');
export let monto = 0;

async function esperarClick() {
  let combs = ingresarCombustible();
  let lits = ingresarLitros();

  if (combs.valido && lits.valido) {
    async function filtrarSurtidores() {
      const surtidores = await crearSurtidores();
      const surtidoresFiltrados = surtidores.filter((surtidor) => {
        return (
          surtidor.combustible.toUpperCase() === combs.valor &&
          lits.valor <= surtidor.litros
        );
      });
      return surtidoresFiltrados;
    }

    const filtrados = await filtrarSurtidores();

    if (filtrados.length > 0) {
      const surtidorSeleccionado = filtrados[0];
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
