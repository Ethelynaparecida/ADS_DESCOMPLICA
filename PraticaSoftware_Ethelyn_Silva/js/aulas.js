function carregar(){
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");

    var textoCompleto = "Nome: " + nome.value + " Sobrenome: " + sobrenome.value + " E-mail: " + email.value;

    jQuery('#informacoes').html(textoCompleto);

    console.log(nome.value + " " + sobrenome.value + " "+ email.value);
}