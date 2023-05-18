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

//Retonro de las funciones

//FUNCIONES TIPO VOID

function imprimirNombre(
  your name : string
): void {
  console.log('Bienvenido ${yourName} a TS');

}
imprimirNombre("MAX");

// funciones con retorno

function operacion1(
  a: number,
  b : number):number {
  resultado = a + b;
  return console.log(resultado);
  }

let ejemploFuncion = operacion1(45, 50)

//FUNCIONES CON VARIOS RETORNOS

function clasificador(
  a: number,
  b: number
  c: number,): number | string 
  {
      if(a>b && a>c) {
          return a;
      }
      if(b>a && b>c) {
          return b;
      }
      if(c>a && c>b) {
          return b;
      }
      else{
          return 'Los numeros son iguales';


      }
  
}
let clasificador1 = console.log(clasificador(6,6,6));