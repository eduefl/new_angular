var minhavar = 'minha variavel';
function minhaFunc(x, y) {
    return x+y;
}
// ES 6 OR ES 2015
// http://es6-features.org/#constants
let num = 2;
const PI = 3.14;

var numeros = [1,2,3]; 
/*/ Three ways to do the same thing 
   First one using only Java Scrippt
   Seccond one using arrow function functional programing 
   Third one also using arrow function functional programing but as the function is a one line function doing this with less characters. 

   when compile using comand tsc it is generated a JS file and in this file the 3 functions has almost the same sintax as the first example.

   The first example is less elegant but more simple to understand

   the seccond example is a little more elegant and not so complex to read.

   the third example is the most elegant but can be a litle complex to read by heart.

   I preffer the seccond example.


   Check the transpiler https://babeljs.io/



/*/
numeros.map(function(valor){
    return valor*2;
});

numeros.map(valor => {
    return valor *2 
});

numeros.map(valor => valor *2);


class Matematica{
    soma(x,y){
        return x+y;
    }
}