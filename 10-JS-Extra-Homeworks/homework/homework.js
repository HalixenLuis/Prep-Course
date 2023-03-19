// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  for (let key in objeto) {
    matriz.push([key, objeto[key]]);
  }
  return matriz;
}

// function deObjetoAmatriz(objeto){
// var arrayClaves = Object.keys(objeto) 
// for (var clave in objeto) {
// array.push ([clave, objeto [clave]]);
// }return array;}

//return Object.entries(objeto);}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let result = {};
  for (let i = 0; i < string.length; i++) {
    if (!result[string[i]]) {
      result[string[i]] = 1;
    } else {
      result[string[i]]++;
    }
  }
  return result;
}

// function numberOfCharacters(string) {
//   var objeto = {}
//   var arrayLetras = string.split("")
//   var letrasOrdenadas = arrayLetras.sort()
//    for (var letra of letrasOrdenadas) {
//      if (!objeto[letra]) {
//       objeto[letra] = 1
//      } else {
//       objeto[letra] += 1
//      }
//    }
//    return objeto;
// }

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
 var arrayString = s.split("");
 var mayusculas = [];
 var minusculas = [];
 for (var letra of arrayString) {
   if (letra === letra.toLowerCase()) {
     minusculas.push(letra);
   } else { mayusculas.push(letra);
  }
 }
 return mayusculas.join("") + minusculas.join("");
}

  



function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabras = str.split(" ");

  palabrasinvertidas = [];

  for (var i = 0; i < palabras.length; i++) {
    var letrasseparadas = palabras[i].split("")

    palabrasinvertidas.push(letrasseparadas.reverse().join("")); 
  };


  return palabrasinvertidas.join(" "); 
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
   //Escribe tu código aquí
  numeroString = numero.toString()
  numeroStringInvertido = numeroString.split("").reverse().join("")

   if(numeroStringInvertido === numeroString){
    return "Es capicua"
   } else { return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var newcadenasinA = cadena.replace("a","");
  var newcadenasinAB = newcadenasinA.replace("b","");
  var newcadenasinABC = newcadenasinAB.replace("c","");
  return newcadenasinABC;
}

/* 

function deleteAbc(cadena){
  return cadena.replace(/[abc]/g, "");
} 

*/


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return arr;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

   // Verificar que ambos arreglos no estén vacíos
  if (arreglo1.length === 0 || arreglo2.length === 0) {
    return [];
  }
  
  // Ordenar los arreglos
  arreglo1.sort();
  arreglo2.sort();
  
  var interseccion = [];
  var i = 0;
  var j = 0;
  
  // Recorrer los dos arreglos al mismo tiempo para encontrar los elementos en común
  while (i < arreglo1.length && j < arreglo2.length) {
    if (arreglo1[i] < arreglo2[j]) {
      i++;
    } else if (arreglo1[i] > arreglo2[j]) {
      j++;
    } else {
      interseccion.push(arreglo1[i]);
      i++;
      j++;
    }
  }
  
  return interseccion;
}
 
 /*var interseccion = [];
  
  // Recorrer arreglo1 y comparar cada elemento con arreglo2
  for (var i = 0; i < arreglo1.length; i++) {
    for (var j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        // Si se encuentra una intersección, agregarla al arreglo interseccion
        interseccion.push(arreglo1[i]);
        break;
      }
    }
  }
  
  return interseccion;
} */


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

