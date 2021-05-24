var cantidad = document.querySelectorAll(".botonSonido").length

for (var i = 0; i < cantidad; i++) {
  document.querySelectorAll(".botonSonido")[i].addEventListener("click", function() {
    var sound = this.classList[1];
    switch (sound) {
      case "sonido1":
        var sonido1 = new Audio("sonidos/animals020.mp3")
        sonido1.play()
        break;
      case "sonido2":
      var sonido2 = new Audio("sonidos/Gallo.mp3")
        sonido2.play()
        break;
      case "sonido3":
      var sonido3 = new Audio("sonidos/iphone-notificacion.mp3")
        sonido3.play()
        break;
      case "sonido4":
      var sonido4 = new Audio("sonidos/mario-bros tuberia.mp3")
        sonido4.play()
        break;
      case "sonido5":
      var sonido5 = new Audio("sonidos/mario-coin.mp3")
        sonido5.play()
        break;
      case "sonido6":
      var sonido6 = new Audio("sonidos/ringtones-kill-bill-whistle.mp3")
        sonido6.play()
        break;
      case "sonido7":
      var sonido7 = new Audio("sonidos/ringtones-super-mario-bros.mp3")
        sonido7.play()
        break;
      case "sonido8":
      var sonido8 = new Audio("sonidos/ringtones-the-avengers.mp3")
        sonido8.play()
        break;
      default:

    }

  })
}
