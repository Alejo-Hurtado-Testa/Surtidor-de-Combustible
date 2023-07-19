const btnLlenar = document.getElementById('btn');
const fomulario1 = document.getElementById('ocultar-form1');
const btnCalcular = document.getElementById('btn-calc');
const formulario2 = document.getElementById('ocultar-form2');
const metodoPago = document.getElementById('metpago');
const inputEfectivo = document.getElementById('efectivo');
const inputTarjeta = document.getElementById('tarjeta');
const btnFin = document.getElementById('btn-fin');

btnLlenar.addEventListener('click', () => {
  fomulario1.style.display = 'grid';
});

btnCalcular.addEventListener('click', () => {
  let combusTrue = ingresarCombustible();
  let litrosTrue = ingresarLitros();
  if (combusTrue.valido && litrosTrue.valido && litrosTrue.valor <= 1000) {
    formulario2.style.display = 'grid';
    /* texto.innerHTML += Total(); */
  } else {
    alert('LLENE LOS CAMPOS CORRESPONDIENTES');
  }
});

metodoPago.addEventListener('change', () => {
  const metodoPagoSelec = metodoPago.value;
  if (metodoPagoSelec === 'efectivo') {
    inputEfectivo.style.display = '';
    inputTarjeta.style.display = 'none';
  } else if (metodoPagoSelec === 'tarjeta') {
    inputEfectivo.style.display = 'none';
    inputTarjeta.style.display = '';
  } else {
    inputEfectivo.style.display = 'none';
    inputTarjeta.style.display = 'none';
  }
});

btnFin.addEventListener('click', () => {
  const metodoPagoSelec = metodoPago.value;
  if (metodoPagoSelec === 'efectivo' && saldoEfectivo() >= 1000) {
    alert('PAGO REALIZADO CON EXITO');
  } else if (metodoPagoSelec === 'tarjeta' && claveTarjeta() === 12345) {
    alert('PAGO REALIZADO Y ACREDITADO EN SU TARJETA CON EXTIO');
  } else {
    alert('ERROR! NO SE HA PODIDO COMPLETAR EL PAGO');
  }
});
