
function calculaImc() {
  return parseFloat(peso / (altura * altura)).toFixed(2);
}

function capturar() {
  altura = document.getElementById("altura").value;
  peso = document.getElementById("peso").value;
  document.getElementById('mostraImc').innerHTML = calculaImc();

  if (calculaImc() < 18.5) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Atenção: Você está abaixo do peso recomendado.";
    document.getElementById('mostraImc').style.color = "#E67E22";
    document.getElementById('mostraExplicaçãoImc').style.color = "#E67E22";
  }

  if (calculaImc() >= 18.5 && calculaImc() <= 24.9) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Parabéns! Você está com o peso normal";
    document.getElementById('mostraImc').style.color = "#27AE60";
    document.getElementById('mostraExplicaçãoImc').style.color = "#27AE60";
  }

  if (calculaImc() >= 25 && calculaImc() <= 29.9) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Atenção! Você está com sobrepeso em relação ao peso recomendado";
    document.getElementById('mostraImc').style.color = "#E67E22";
    document.getElementById('mostraExplicaçãoImc').style.color = "#E67E22";
  }

  if (calculaImc() >= 30 && calculaImc() <= 34.9) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Atenção! Você está com Obesidade grau I";
    document.getElementById('mostraImc').style.color = "#E74C3C";
    document.getElementById('mostraExplicaçãoImc').style.color = "#E74C3C";
  }

  if (calculaImc() >= 35 && calculaImc() <= 39.9) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Atenção! Você está com Obesidade grau II";
    document.getElementById('mostraImc').style.color = "#E74C3C";
    document.getElementById('mostraExplicaçãoImc').style.color = "#E74C3C";
  }

  if (calculaImc() >= 40) {
    document.getElementById('mostraExplicaçãoImc').innerHTML = "Atenção! Você está com Obesidade grau III";
    document.getElementById('mostraImc').style.color = "#E74C3C";
    document.getElementById('mostraExplicaçãoImc').style.color = "#E74C3C";
  }
}

