function elegibilidade() {

  var idade = parseInt(document.getElementById("idade").value);
  var salario = parseFloat(document.getElementById("salario").value);

  if (idade > 17 && salario > 1500)
    alert("Você pode abrir conta no banco XPTO")
  else
    alert("Você ainda não pode abrir conta no banco XPTO")
}

