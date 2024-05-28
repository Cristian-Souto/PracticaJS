console.log("Hello World");

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
 /*  perimeter  () {
    return 2 * Math.PI * this.radius
  } */
};

/*
Hay que tener en cuenta aqui que el valor de diámetro es una función regular o normal,

mientras que el valor de perímetro es una función de flecha.

Con las funciones de flecha, la palabra clave THIS se refiere a su ámbito actual, 

a diferencia de las funciones regulares. Esto significa que cuando llamamos "perímetro",

no se refiere al objeto en sí mismo, sino a su ámbito circundante (ventana por ejemplo).

No hay valor radius en ese objeto, que devuelve undefined.
*/
console.log(shape.diameter());
console.log(shape.perimeter());