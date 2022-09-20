var numeroSecreto = parseInt(Math.random() * 11);

var contador = 0;

document.getElementById("resultado1").innerHTML = "3 Tentativas";

function Chutar() {

  document.getElementById("resultado1").innerHTML = "";
  var chute = parseInt(document.getElementById("valor").value);
  

  if (chute > 10 || chute < 0 || isNaN(chute)) {
    alert("Valor não aceito!");
    document.getElementById("valor").value = "";

  } else if (chute > numeroSecreto) {
    document.getElementById("resultado1").innerHTML = "Um pouco menos";
    document.getElementById("resultado").innerHTML = "Errou!";
    document.getElementById("valor").value = "";
  } else if (chute < numeroSecreto) {
    document.getElementById("resultado1").innerHTML = "Um pouco mais";
    document.getElementById("resultado").innerHTML = "Errou!";
    document.getElementById("valor").value = "";
  } else if (chute == numeroSecreto) {
    document.getElementById("btnChutar").disabled = true;
    document.getElementById("resultado").innerHTML = "acertou! o numero secreto é " + numeroSecreto;
    document.getElementById("resultado1").innerHTML = "Reinicie e Me desafie Novamente";
  }

  if (chute < 10 && chute > 0) {
    contador++;
    document.getElementById("resultado2").innerHTML = "tentativa " + contador;
    if (contador == 3) {
      document.getElementById("btnChutar").disabled = true;
      document.getElementById("resultado1").innerHTML = "3 Tentativas, O numero secreto é " + numeroSecreto;
      document.getElementById("resultado2").innerHTML = "Reinicie e Me desafie Novamente";
      numeroSecreto = parseInt(Math.random() * 11);

    }
  }
}

function Reiniciar() {
  document.getElementById("btnChutar").disabled = false;
  numeroSecreto = parseInt(Math.random() * 11);
  contador = 0;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("resultado1").innerHTML = "3 Tentativas";
  document.getElementById("resultado2").innerHTML = "";
  document.getElementById("valor").value = "";

}

