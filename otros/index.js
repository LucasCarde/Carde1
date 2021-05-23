// JUEGO DE DADOS
var a1 = Math.random();
var a2 = Math.random();
var n1 = Math.floor(a1 * 6) + 1;
var n2 = Math.floor(a2 * 6) + 1;

// DADO 1
switch (n1) {
  case 1:
    document.querySelector(".dado1").setAttribute("src", "https://lh3.googleusercontent.com/proxy/a9GCP246mCiDlHrzhXv4fgp6jEn6O2M488lq4fy0hMlmQ6uTiOn0CZphAgy_snmadU2XnKMe9eh3dTlYa-8p9yNWrRNSTDzev_Lc-ObrJ6jR")
    break;
    case 2:
    document.querySelector(".dado1").setAttribute("src", "https://lh3.googleusercontent.com/proxy/ykfQQb5mBNQZG9IqkYpetG1L2eT_pmRMEc-y_z4MwWvaHnqw0QMgcOYn2FECfLsCl3elUCG5GQbu84uxFytEyKCcW11JT3kYPIp1lfPU5kJy")
    break;
    case 3:
    document.querySelector(".dado1").setAttribute("src", "https://webstockreview.net/images/dice-clipart-5.gif")
    break;
    case 4:
    document.querySelector(".dado1").setAttribute("src", "https://lh3.googleusercontent.com/proxy/EylkE8XLkM51YigUSrY-eQSbmqyaXpmmYh0KqejE5HJVvc8D1EjuMs9S0g8-llP8r_cMUIG7Ed_shoWOjTFAGq-8SXtDi8A3q6mR2Gsy96Dk")
    break;
    case 5:
    document.querySelector(".dado1").setAttribute("src", "https://webstockreview.net/images/dice-clipart-dice-side-3.gif")
    break;
    case 6:
    document.querySelector(".dado1").setAttribute("src", "https://lh3.googleusercontent.com/proxy/TxpKNNvjPt5El0Kb98p4FgPsVfRuwSgVD_aW-oWiQcouebc2qbAqXUQQ-J6jIvuSYQhfMpC361B7Brdpo3uD5ZvRCXdwkJXETvQy3rC3B3FDDbFd1kcCNXmk3Dg")
    break;
  default:

}

// DADO 2
switch (n2) {
  case 1:
    document.querySelector(".dado2").setAttribute("src", "https://lh3.googleusercontent.com/proxy/a9GCP246mCiDlHrzhXv4fgp6jEn6O2M488lq4fy0hMlmQ6uTiOn0CZphAgy_snmadU2XnKMe9eh3dTlYa-8p9yNWrRNSTDzev_Lc-ObrJ6jR")
    break;
    case 2:
    document.querySelector(".dado2").setAttribute("src", "https://lh3.googleusercontent.com/proxy/ykfQQb5mBNQZG9IqkYpetG1L2eT_pmRMEc-y_z4MwWvaHnqw0QMgcOYn2FECfLsCl3elUCG5GQbu84uxFytEyKCcW11JT3kYPIp1lfPU5kJy")
    break;
    case 3:
    document.querySelector(".dado2").setAttribute("src", "https://webstockreview.net/images/dice-clipart-5.gif")
    break;
    case 4:
    document.querySelector(".dado2").setAttribute("src", "https://lh3.googleusercontent.com/proxy/EylkE8XLkM51YigUSrY-eQSbmqyaXpmmYh0KqejE5HJVvc8D1EjuMs9S0g8-llP8r_cMUIG7Ed_shoWOjTFAGq-8SXtDi8A3q6mR2Gsy96Dk")
    break;
    case 5:
    document.querySelector(".dado2").setAttribute("src", "https://webstockreview.net/images/dice-clipart-dice-side-3.gif")
    break;
    case 6:
    document.querySelector(".dado2").setAttribute("src", "https://lh3.googleusercontent.com/proxy/TxpKNNvjPt5El0Kb98p4FgPsVfRuwSgVD_aW-oWiQcouebc2qbAqXUQQ-J6jIvuSYQhfMpC361B7Brdpo3uD5ZvRCXdwkJXETvQy3rC3B3FDDbFd1kcCNXmk3Dg")
    break;
  default:
}

// QUIEN GANO?
if (n1 < n2) {
  document.querySelector(".quienGano").textContent = "El ganador es el jugador 2";}
else {
  if (n1 > n2) {
    document.querySelector(".quienGano").textContent = "El ganador es el jugador 1"
  } else {
    document.querySelector(".quienGano").textContent = "Ha sido un empate!"
  }
}

// SONIDO AL TOCAR LOS DADOS
var sonido = new Audio("sonidos/mario-coin.mp3");
document.querySelector(".dado1").addEventListener("click", function () {
  sonido.play();
})
document.querySelector(".dado2").addEventListener("click", function () {
  sonido.play();
})