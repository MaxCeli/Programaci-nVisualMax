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

// RETORNO EN LAS FUNCIONES

// FUNCIONES TIPO VOID

function imprimirNombre(
  yourName: string): void {
  console.log(`Bienvenido ${yourName} a TS`);
}
imprimirNombre("Diego");

// FUNCIONES CON RETORNO
let resultado = 0;

function operacion1(
  a: number,
  b: number): number {
  return resultado = a + b;
}

let ejemploFuncion = console.log(operacion1(45 ,50));

// FUNCIONES CON VARIOS RETORNOS

function clasificador(
  a:number,
  b:number,
  c:number): number | string
  {
    if (a>b && a>c) {
      return a;
    } else if (b>a && b>c) {
      return b;
    } else if (c>a && c>b){
      return c;
    } else{
      return "Los numeros son iguales"
    }
  };

  let clasificador1 = console.log(clasificador(4,5,6));