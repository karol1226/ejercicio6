//Crea un archivo llamado objetos.js que contenga las siguientes líneas

//- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datos={
nombre:"mariam",
apellido:"lopera",
edad:19,
altura:160,
desarrollas:true
}
//- Una variable que obtenga tu edad a partir del objeto anterior
var nombre1=datos.nombre
console.log("Una variable que obtenga tu edad a partir del objeto anterior")
console.log(nombre1)
//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s


const datos2={
    nombre:"bajo",
    apellido:"lopez",
    edad:18,
    altura:150,
    desarrollas:true
    }
    const datos3={
        nombre:"atha",
        apellido:"alvarado",
        edad:23,
        altura:160,
        desarrollas:true
        }

        const contenido=[datos,datos2,datos3]
        console.log("lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s")
        console.log(contenido)
//- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const contenido1=[datos,datos2,datos3]


contenido1.sort((a,b)=>b.edad-a.edad)
console.log("ordenados de mayor a menor")
console.log(contenido1)