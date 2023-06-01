//librerias soportadas por TSC
import { compareAsc, format } from 'date-fns';

console.log(format(new Date(2000, 11, 10), "MM/dd/yyyy"));

const fechas=[
  new Date(2000, 10, 22),
  new Date(2010, 10, 20),
  new Date(1900, 9, 15),
  new Date(1989, 6, 7),
  new Date(1999, 5, 9),
  new Date(1989, 11, 10),
]
fechas.sort(compareAsc)

console.log(fechas);


