//Criptografando o Texto

//Seleção do botão Criptografar
var botaoCripto = document.querySelector("#btn-cripto");

//Estabelecendo a função do botão
botaoCripto.addEventListener("click",function(event){
  event.preventDefault();

  var inputEntrada = document.querySelector("#input-texto");
  var inputSaida = document.querySelector("#msg");
  var palavra = inputEntrada.value;
  var letras = palavra.split('');
  var saida = [];
  var vogais = ["a","e","i","o","u"]
  var cod = ["ai","enter","imes","ober","ufat"];

  for(i=0;i<letras.length;i++){
    if(letras[i]=="a"){
      saida.push(cod[0]);
    }
    if(letras[i]=="e"){
      saida.push(cod[1]);
    }
    if(letras[i]=="i"){
      saida.push(cod[2]);
    }
    if(letras[i]=="o"){
      saida.push(cod[3]);
    }
    if(letras[i]=="u"){
      saida.push(cod[4]);
    }
    if(letras[i]!="a" &&
      letras[i]!="e" &&
      letras[i]!="i" &&
      letras[i]!="o" &&
      letras[i]!="u") {
      saida.push(letras[i]);
    }
  }

  inputSaida.value= saida.join('');
  console.log(saida);



  //Tentativa Descartada = replaceAll modifica os termos do código por conter vogais.
  //saida = palavra.replaceAll("a","ai").replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("u","ufat");
});

//Descriptografando o Texto

//Seleção do botão Criptografar
var botaoDescripto = document.querySelector("#btn-descripto");

//Estabelecendo a função do botão
botaoDescripto.addEventListener("click",function(event){
  event.preventDefault();

  var inputEntrada = document.querySelector("#input-texto");
  var palavra = inputEntrada.value;
  var inputSaida = document.querySelector("#msg");

  saida = palavra.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
  inputSaida.value = ''
  inputSaida.value = saida;
  console.log(saida);
});

//Botão copiar

function copia(){
  var copiaTexto = document.querySelector("#msg");
  copiaTexto.select();
  document.execCommand("copy");
}
botaoCopiar = document.querySelector("#btn-copy");
botaoCopiar.addEventListener("click",copia);
