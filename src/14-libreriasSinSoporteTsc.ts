//librerias sin soportadas por TSC

import _ from 'lodash'

const data =[
  {
    user: "Fernando",
    role : "Estudiante"
  },
  {
user : "Max",
role : "Estudiante"
  },
  {
user : "Diego",
role : "Docente"
  },
  {
user : "Hernan",
role : "Docente"
  },
  {
user : "ken",
role : "Estudiante"
  },
  {
user : "Esteban",
role : "Estudiante"
  },
  {
user : "Andres",
role : "Estudiante"
  },
  {
 user : "Pablo",
 role : "Estudiante"
  },
  {
 user : "Ivan",
 role : "Estudiante"
  },

]
console.log(data);
console.log(_.chunk(data, 2)[2]);

const rta = _.groupBy(data, (item) => (item.role))
console.log(rta)


const ejemplo = _.join(data, '/');
console.log(ejemplo)

