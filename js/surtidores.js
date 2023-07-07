class Surtidor {
  constructor(nombre, combustible, precio, litros) {
    this.nombre = nombre;
    this.combustible = combustible;
    this.precio = precio;
    this.litros = litros;
  }

  cargarCombustible(lts) {
    if (lts <= this.litros) {
      this.litros -= lts;
      return this.precio * lts;
    } else {
      alert("EL SURTIDOR NO CUENTA CON LA CANTIDAD DE LITROS SOLICITADOS.");
    }
  }
}

const surtidor1 = new Surtidor("Surtidor V", "Vibranium S", 236.43, 1000);
const surtidor2 = new Surtidor("Surtidor P", "Paladium I", 342.67, 1000);
const surtidor3 = new Surtidor("Surtidor C", "Crypton ID", 565.23, 1000);
const surtidor4 = new Surtidor("Surtidor A", "Alamantium UD", 692.12, 1000);
const surtidor5 = new Surtidor("Surtidor G", "Gallion GO", 832.78, 1000);

let surtidores = [];
surtidores.push(surtidor1);
surtidores.push(surtidor2);
surtidores.push(surtidor3);
surtidores.push(surtidor4);
surtidores.push(surtidor5);

console.log(surtidores);
console.log(surtidor2.nombre);
console.log(surtidor5.combustible);

let combusselecc = prompt("Que combustible desea");
let combusseleccMayuscula = combusselecc.toUpperCase();
let litroselecc = Number(prompt("cuaantos litros deseaa"));

const surtidoresFiltrados = surtidores.filter((surtidor) => {
  return (
    surtidor.combustible.toUpperCase() === combusseleccMayuscula &&
    litroselecc <= surtidor.litros
  );
});

if (surtidoresFiltrados.length > 0) {
  const surtidorSeleccionado = surtidoresFiltrados[0];
  const total = surtidorSeleccionado.cargarCombustible(litroselecc);
  alert(`SU TOTAL A PAGAR ES DE: ${total}`);
  alert(`LITROS RESTANTES DEL SURTIDOR: ${surtidorSeleccionado.litros}`);
} else {
  alert("NO SE ENCONTRO NINGUN SURTIDOR DISPONIBLE");
}
