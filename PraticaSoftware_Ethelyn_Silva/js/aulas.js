function carregar(){
    var nome = document.getElementById("nome");
    var sobrenome = document.getElementById("sobrenome");
    var email = document.getElementById("email");

    var textoCompleto = "Nome: " + nome.value + " Sobrenome: " + sobrenome.value + " E-mail: " + email.value;

    jQuery('#informacoes').html(textoCompleto);

    console.log(nome.value + " " + sobrenome.value + " "+ email.value);
}
function carregarNotas(){
    var nota1 = document.getElementById("nota1");
    var nota2 = document.getElementById("nota2");
    var soma = parseInt(nota1.value) + parseInt(nota2.value);

    if (soma > 10){
        jQuery('#informacoesNotas').html("Valor acima de 10");
        $('#informacoesNotas').css('background-color', 'green');
        $('#informacoesNotas').css('color', 'white');
    }else{
        jQuery('#informacoesNotas').html("Valor abaixo de 10");
        $('#informacoesNotas').css('background-color', '#cc4c4c');
        $('#informacoesNotas').css('color', 'white');
    }

  

    console.log("nota = "+soma);
}