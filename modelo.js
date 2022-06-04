function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtano");
  var res = document.querySelector("div#res");

  if (formAno.value.length == 0 || Number(formAno.value) > ano) {
    alert("[ERROR]: Verifique os dados e tente novamente");
  } else {
    var formSex = document.getElementsByName("radsex");
    var idade = ano - Number(formAno.value);
    var genero = " ";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (formSex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 3) {
        //bebe
        img.setAttribute("src", "images/babyboy.png");
      } else if (idade < 13) {
        //criança
        img.setAttribute("src", "images/kidboy.png");
      } else if (idade < 20) {
        //adolescente
        img.setAttribute("src", "images/teenagerboy.png");
      } else if (idade < 60) {
        //adulto
        img.setAttribute("src", "images/adultman.png");
      } else {
        //idoso
        img.setAttribute("src", "images/olderman.png");
      }
    } else if (formSex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 3) {
        //bebe
        img.setAttribute("src", "images/babygirl.png");
      } else if (idade < 13) {
        //criança
        img.setAttribute("src", "images/kidgirl.png");
      } else if (idade < 20) {
        //adolescente
        img.setAttribute("src", "images/teenagergirl.png");
      } else if (idade < 60) {
        //adulto
        img.setAttribute("src", "images/adultwoman.png");
      } else {
        //idoso
        img.setAttribute("src", "images/olderwoman.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `<p>${genero} com ${idade} anos.</p>`;
    res.appendChild(img);
  }
}
