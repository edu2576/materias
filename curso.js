let materia = [
  {
      id: 1,
      nombre: 'Lógica de Programación',
      duracion: 'cuatro meses',
      costo: 200000
  },
  {
      id: 2,
      nombre: 'Estructura de datos',
      duracion: 'seis meses',
      costo: 300000
  },
  {
      id: 3,
      nombre: 'Teoría de grafos',
      duracion: 'ocho meses',
      costo: 400000
  }
];

var i = 0;

let listar =()=>{
    setTimeout(function(){
        console.log("La materia "+ materia[i]['nombre']+
                    " de id "+materia[i]['nombre']+
                    " tiene una duracion de "+materia[i]['duracion']+
                    " y un costo de "+materia[i]['costo']);
        i++;
        if(i < materia.length)
            listar();
    },2000);
}

module.exports = {
    materia,
    listar
};
