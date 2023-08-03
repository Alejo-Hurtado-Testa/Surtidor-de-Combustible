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
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El surtidor no cuenta con la cantidad de litros solicitados.',
        background: 'Dark',
      });
    }
  }
}

async function pedirSurtidores() {
  try {
    const resp = await fetch('http://127.0.0.1:5500/js/servicio.json');
    const data = await resp.json();
    return data;
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `No se ha podido acceder a la informacion de los surtidores: ${error}`,
      background: 'Dark',
    });
    return [];
  }
}

export async function crearSurtidores() {
  const datos = await pedirSurtidores();
  let surtidores = [];
  datos.forEach((element) => {
    const { nombre, combustible, precio, litros } = element;
    const surtidor = new Surtidor(nombre, combustible, precio, litros);
    surtidores.push(surtidor);
  });
  return surtidores;
}
