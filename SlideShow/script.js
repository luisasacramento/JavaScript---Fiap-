var now = new Date()
    document.write ("Hoje é " + now.getDate().toString().padStart(2,'0') +
                     " do " + (String(now.getMonth() + 1).padStart(2,'0') +
                     " de " + now.getFullYear()) )
/* 
                     O método padStart() preenche a string original com um determinado caractere, 
                     ou conjunto de caracteres, (várias vezes, se necessário)  */

                   /*   O método getMonth() retorna o mês da data especificada.
                      É importante observar a respeito do método getMonth() 
                      que ele retorna valores indexados em zero (ou seja, de 0 a 11),
                       onde 0 representa janeiro e 11 representa dezembro. Por isso,
                        é preciso adicionar 1 para "normalizar" o valor do mês. */

/*criando a função validar */
function validar() {

    /* declarando as variáveis*/
    let usuario = document.getElementById("usuario").value
    let password = document.getElementById("password").value


    /*fazendo  if e else para validar os campos */
    if (usuario == "" || password == "") {
        alert('Preencha os campos')
    } else if (password !== "1234")
        alert('Senha incorreta')
    else {
        alert('Acesso liberado!!!')
        /*chamando a página index.html */
        window.open('https://www.fiap.com.br/');
    }

}

// criando o slideshow da página home 

var imagens = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];
var Index = 0;
var time = 5000;

function slideShow() {
    document.getElementById('image1').src = imagens[Index];
    Index++;
    if (Index == imagens.length) { Index = 0; }
    setTimeout("slideShow()", time);
}
slideShow();