function calcularImovel(metragem,metragemlocal ,quartos) {
  let precoFinal;
  switch (quartos) {
    case 1:
      precoFinal = metragem * metragemlocal * 1;
      break;
    case 2:
      precoFinal = metragem * metragemlocal * 1.2;
      break;
    case 3:
      precoFinal = metragem * metragemlocal * 1.3;
      break;
    case 4:
      precoFinal = metragem * metragemlocal * 1.4;
      break;
    default:
      document.getElementById("Resultado").innerHTML = "Não permitido. O número de quartos deve ser abaixo de 4.";
      return;
  }

  document.getElementById("resultado").innerHTML =
    "O valor final do imóvel é de: R$ " + precoFinal.toFixed(2);
}
document
  .getElementById("formImovel")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    let metragem = parseFloat(document.getElementById("metragem").value);
    let metragemlocal = parseFloat(document.getElementById("metragemlocal").value);
    let quartos = parseInt(document.getElementById("quartos").value);
    calcularImovel(metragem,metragemlocal,quartos);
  });
