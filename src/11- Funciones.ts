//funciones

type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
type Genero = 'Hombre' | 'Mujer';

function crearProducto(
  nombre: string,
  costo: number,
  createdAt: Date,
  genero: Genero,
  talla?: Sizes,
  stock?: number | null
) {
  return {
    nombre,
    costo,
    genero,
    talla,
    stock,
    createdAt,
  };
}
var Producto1 = crearProducto(
  'Zapato Deportivo',
  70,
  new Date('02/02/93'),
  'Mujer',
  'XL',
  null
);

console.log(Producto1);
console.log(Producto1.createdAt);

//ARGUMENTOS OPCIONALES

const Producto2 = crearProducto(
  'Zapato 2',
  80,
  new Date('02/02/94'),
  'Mujer',
);

console.log(Producto2);
console.log(Producto2.createdAt);