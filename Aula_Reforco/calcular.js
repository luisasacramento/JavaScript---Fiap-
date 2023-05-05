function calcular(){
  let formulario = document.getElementById("formulario");

  let valor01 = parseFloat(formulario.vl01.value);
  let valor02 = parseFloat(formulario.vl02.value);
  let calcular = parseFloat(valor01) + parseFloat(valor02);
  formulario.resultado.value = calcular;
}
