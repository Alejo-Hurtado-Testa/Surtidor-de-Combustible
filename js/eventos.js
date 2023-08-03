import { monto } from './main.js';

const btnLlenar = document.getElementById('btn');
const fomulario1 = document.getElementById('ocultar-form1');
const btnCalcular = document.getElementById('btn-calc');
const formulario2 = document.getElementById('ocultar-form2');
const metodoPago = document.getElementById('metpago');
const inputEfectivo = document.getElementById('efectivo');
const inputTarjeta = document.getElementById('tarjeta');
const btnFin = document.getElementById('btn-fin');
const requerEfect = document.getElementById('saldoefect');
const requerTarje = document.getElementById('claveinput');

fomulario1.addEventListener('submit', quitarEnvioForm);

btnLlenar.addEventListener('click', () => {
  fomulario1.style.display = 'grid';
});

btnCalcular.addEventListener('click', () => {
  let combusTrue = ingresarCombustible();
  let litrosTrue = ingresarLitros();
  if (combusTrue.valido && litrosTrue.valido && litrosTrue.valor <= 1000) {
    formulario2.style.display = 'grid';
  }
});

metodoPago.addEventListener('change', () => {
  const metodoPagoSelec = metodoPago.value;
  if (metodoPagoSelec === 'efectivo') {
    inputEfectivo.style.display = '';
    inputTarjeta.style.display = 'none';
    requerTarje.removeAttribute('required');
  } else if (metodoPagoSelec === 'tarjeta') {
    inputEfectivo.style.display = 'none';
    requerEfect.removeAttribute('required');
    inputTarjeta.style.display = '';
  } else {
    inputEfectivo.style.display = 'none';
    inputTarjeta.style.display = 'none';
  }
});

btnFin.addEventListener('click', () => {
  quitarEnvioForm(event);
  const metodoPagoSelec = metodoPago.value;
  if (metodoPagoSelec === 'efectivo' && saldoEfectivo() >= monto) {
    Swal.fire({
      icon: 'success',
      title: 'Realizado!',
      text: 'Pago realizado con exito!',
      footer: `<h5 class="info-monto">Su total a pagar es de: 0</h5>`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  } else if (metodoPagoSelec === 'tarjeta' && claveTarjeta() === 12345) {
    Swal.fire({
      icon: 'success',
      title: 'Realizado!',
      text: 'Pago realizado y acreditado en su tarjeta con exito!',
      footer: `<h5 class="info-monto">Su total a pagar es de: 0</h5>`,
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.reload();
      }
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El pago no pudo completarse!',
    });
  }
});
