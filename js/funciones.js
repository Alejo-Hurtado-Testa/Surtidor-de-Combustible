const namecb = document.getElementById('name');
const litroscb = document.getElementById('lts');
const saldo = document.getElementById('saldoefect');
const clave = document.getElementById('claveinput');

function ingresarCombustible() {
  let combustible = namecb.value;
  let combustibleMayus = combustible.toUpperCase();
  return { valido: !!combustibleMayus, valor: combustibleMayus }; // RETORNAMOS UN OBJETO PARA PODER RETORNAR DOS VALORES NECESARIOS
}

function ingresarLitros() {
  let litros = litroscb.value;
  return { valido: !!litros, valor: Number(litros) }; // RETORNAMOS UN OBJETO PARA PODER RETORNAR DOS VALORES NECESARIOS
}

function saldoEfectivo() {
  let saldoEFT = Number(saldo.value);
  return saldoEFT;
}

function claveTarjeta() {
  let claveTDC = Number(clave.value);
  return claveTDC;
}

function total(namesurti, total, litrosrest) {
  return `<h4 class="info-monto">Usted selecciono el surtidor: ${namesurti}</h4>
  <h5 class="info-monto">Su total a pagar es de: ${total}</h5>
  <h6 class="info-monto">Litros restantes en el surtidor: ${litrosrest}</h6>`;
}

function quitarEnvioForm(event) {
  event.preventDefault();
}
