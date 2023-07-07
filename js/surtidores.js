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
