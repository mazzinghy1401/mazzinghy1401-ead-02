    function somar(a, b) {
    return a+b;
  }
  function subtrair(a, b) {
    return a-b;
  }
  function multiplicar(a, b) {
    return a*b;
  }
  function dividir(a, b) {
    return a/b;
  }
  
  function calculadora() {
    var a = parseInt(prompt('Digite o Primeiro Número: ' + '\n' + '\n' + 'Prompt 1'));
    var b = parseInt(prompt('Digite o Segundo Número: ' + '\n' + '\n' + 'Prompt 2'));
    alert('A + B: ' + somar(a, b) + '\n'  + 'A - B: ' + subtrair(a, b) + '        Alert' + '\n' + 'A * B: ' + multiplicar(a, b)+
    '\n' + 'A /B: ' + dividir(a, b).toFixed(2));
  }





