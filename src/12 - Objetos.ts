//OBJETOS COMO PARTE DE UNA FUNCION

function imprimirDatos(
    data:{
       userName: string,
       email: string
    }
   ): void   
   {
       console.log(`Tu nombre de usuario es: ${data.userName}, y el Email registrado`);
   
   }
   imprimirDatos({userName: "Max", email: "mdc.celi@yavirac.edu.ec"});
   
   //OBJETOS COMO TIPO 
   
   type userData = {
       nombre: string,
       edad : number,
       email: string,
       telefono: string
   }
   
   let userList : userData[] = [];
   
   userList.push({
       nombre: "Max",
       edad: 22,
       email: "mdc.celi@yavirac.edu.ec",
       telefono: "0939345167"
   
   });
   
   console.log(userList[0]);