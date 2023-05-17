//Null

let Myvar = null; //sin espeficar de tipo any
let otraVar = undefined; //Tipo any y objet
console.log('typeof of otraVar:', typeof otraVar, 'typeof of Myvar:', typeof Myvar);

let myNull: null = null; // Tipo null
let myUndefined: undefined = undefined; // Tipo undefined
console.log('typeof of myNull:', typeof myNull, 'typeof of myUndefine:', typeof myUndefined);

//null
let myNumber: number | null = null;
console.log('typeof of myNumber:', typeof myNumber);
console.log('myNumber:', myNumber);

myNumber = 60;
console.log('typeof of myNumber:', typeof myNumber);
console.log('myNumber:', myNumber);

//undefined
let myString: string | undefined = undefined;
console.log('typeof of myString:', typeof myString);
console.log('myString:', myString);

myString = 'hola Ts';
console.log('typeof of myString:', typeof myString);
console.log('myString:', myString);