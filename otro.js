var titulo = ""
$(document).on("keypress", function(event) {
    titulo = titulo + event.key
    $("h1").text(titulo);
})
