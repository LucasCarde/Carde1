// JUEGO DE DADOS
var sonido = new Audio("sonidos/mario-coin.mp3");
document.querySelector(".botonJugar").addEventListener("click", function() {
  // sonido.play();
  var a1 = Math.random();
  var n1 = Math.floor(a1 * 6) + 1;
  var a2 = Math.random();
  var n2 = Math.floor(a2 * 6) + 1;
  switch (n1) {
    case 1:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice1.png")
      break;
    case 2:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice2.png")
      break;
    case 3:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice3.png")
      break;
    case 4:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice4.png")
      break;
    case 5:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice5.png")
      break;
    case 6:
      document.querySelector(".dado1").setAttribute("src", "fotos/dice6.png")
      break;
    default:

  }
  switch (n2) {
    case 1:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice1.png")
      break;
    case 2:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice2.png")
      break;
    case 3:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice3.png")
      break;
    case 4:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice4.png")
      break;
    case 5:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice5.png")
      break;
    case 6:
      document.querySelector(".dado2").setAttribute("src", "fotos/dice6.png")
      break;
    default:
  }
  if (n1 < n2) {
    document.querySelector(".quienGano").textContent = "El ganador es el jugador 2";}
  else {
    if (n1 > n2) {
      document.querySelector(".quienGano").textContent = "El ganador es el jugador 1"
    } else {
      document.querySelector(".quienGano").textContent = "Ha sido un empate!"
    }
  }
})
