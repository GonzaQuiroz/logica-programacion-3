function calcularFactorial(){
    const numUsuario = document.getElementById('numUsuario').value;
    const resultado = document.getElementById('resultado');

const num = parseFloat(numUsuario);

if (isNaN(num)) {
    resultado.innerHTML = "ingresa un numero valido" ;
}else{
    if(num < 0){
        resultado.innerHTML = "ingrese un numero mayor a cero";
    }else{
        const entregarFac = factorialRecur(num);
        resultado.innerHTML = `Tu factorial es: ${entregarFac}`; 

    }
  }
}
function factorialRecur(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecur(n - 1);
    }
  }
