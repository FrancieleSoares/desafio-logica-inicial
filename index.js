let nomeHeroi = "Connan"
let experiencia = 5000
let mensagem = " "
if (experiencia < 1000){
  mensagem = "Ferro"
} else if (experiencia > 1000 < 2000){
  mensagem = "Bronze"
} else if (experiencia > 2000 < 5000){
  mensagem = "Prata"
} else if (experiencia > 5000 < 7000){
  mensagem = "Ouro"
} else if (experiencia > 7000 < 8000){
  mensagem = "Platina"
} else if (experiencia > 8000 < 9000){
  mensagem = "Ascendente"
} else if (experiencia > 9000 < 10000){
  mensagem = "Imortal"
} else if (experiencia > 10000){
  mensagem = "Radiante"
}
console.log("O herói de nome " + nomeHeroi + "está no nível de " + mensagem )
