console.log("JavaScript carregado com sucesso!");

function calcularMedia() {

let nota1 = document.getElementById("nota1").value;
let nota2 = document.getElementById("nota2").value;

if (nota1 === "" || nota2 === "") {
    document.getElementById("resultado").innerHTML =
        "Preencha as duas notas!";
    return;
}

nota1 = Number(nota1);
nota2 = Number(nota2);

if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
    document.getElementById("resultado").innerHTML =
        "Digite notas entre 0 e 10!";
    return;
}

let media = (nota1 + nota2) / 2;

let resultado = document.getElementById("resultado");

if (media >= 6) {

    resultado.innerHTML =
        "Média: " + media.toFixed(2) +
        "<br> Você está aprovado!";

    resultado.style.color = "#4ade80";

} else {

    resultado.innerHTML =
        "Média: " + media.toFixed(2) +
        "<br> Você está reprovado!";

    resultado.style.color = "#f87171";

}


}
